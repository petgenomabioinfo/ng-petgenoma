import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Auth, Storage } from 'aws-amplify';
import { APIService } from '../API.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { map } from 'rxjs/operators'
import { from, Observable } from 'rxjs';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	//authState: AuthState;
	//user: CognitoUserInterface | undefined;
	connectedUser = {
		id: '',
		username: '',
		phoneNb: '',
		attributes: null
	};

	connectedUserData;
	kitsList;
	isDataLoaded = false;
	isUserLoaded = false;
	lang;
	userListReports = [];
	publicFileListReports = [];
	mockReport;

	constructor(private authenticator: AuthenticatorService, private shared: SharedService, private api: APIService, private translate: TranslateService, private router: Router, private ref: ChangeDetectorRef) {

		shared.globalLanguage$.subscribe(value => { this.translate.use(value); this.lang = value; });

		Auth.currentUserInfo().then(user => {
			this.connectedUser = user;
			this.initData(user).then(() => { this.isDataLoaded = true; })
		});
	}

	ngOnInit(): void {
		this.shared.globalLanguage$.subscribe(value => {
			this.translate.use(value);
			this.lang = value;
		});
		// onAuthUIStateChange((authState, authData) => {
		// 	this.authState = authState;
		// 	this.user = authData as CognitoUserInterface;

		// 	this.ref.detectChanges();
		// 	if (this.user) {
		// 		this.initData(this.user).then(() => { this.isDataLoaded = true; })
		// 	}
		// });
	}

	async initData(user) {
		await Storage.list('assets/', { level: 'private' })
			.then(result => {
				this.userListReports = result.results.map(a => a.key);
			});

		await Storage.list('docs/', { level: 'public' })
			.then(files => this.extractDocs(files.results.map(a => a.key)));

		await this.api.GetUser(user.username).then((res) => {
			this.isUserLoaded = true;
			if (res) {
				const kits = this.addReportFile(from(res.kits.items));
				this.connectedUserData = res;
				this.connectedUserData.kits.items = kits;
				this.router.navigate(['/home']);
			} else {
				const userForUpdate = {
					id: this.connectedUser.username,
					// phoneNb: 'test',
					// firstname: '',
					// lastname: '',
					email: this.connectedUser.attributes.email,
					// street: '',
					// city: '',
					// postalCode: '',
					// researchAuthorization: '',
					// surveyAuthorization: '',
					// dogs: [],
					// kits: [],
					//username: this.connectedUser.attributes.email,
				};
				this.api.CreateUser(userForUpdate).then(
					res => {
						console.log('User successfully added.');
						location.reload();
					},
					err => {
						console.log('Error : ' + err.errors[0].message);
					}
				);
				this.connectedUserData = userForUpdate;
			}
			//console.log(this.connectedUserData);
		});

	}

	ngOnDestroy() {
		//return onAuthUIStateChange;
	}

	addReportFile(kits) {
		let kitsUpdated = [];
		this.checkReport(kits)
			.subscribe(kit => {
				kitsUpdated.push(kit)
			});
		return kitsUpdated;
	}

	checkReport(kits): Observable<any> {
		return kits.pipe(map((kit: any) => {
			const kitUpdated: any = kit;
			kitUpdated.reportFile = this.userListReports.find(
				item => item.includes(kit.id)
			);
			return kitUpdated;
		}));
	}

	public dlfile(fileTodownload) {
		Storage.get(fileTodownload,
			{ level: 'private', download: true })
			.then((res: any) => this.downloadBlob(res.Body, fileTodownload))

	}

	private extractDocs(listFile) {
		let mock = listFile.find(function (value) {
			return /MOCK-REPORT.pdf$/.test(value);
		});
		this.mockReport = mock;
	}

	public dlpublicfile(filename) {
		let fileTodownload;
		if (filename == "mock") {
			fileTodownload = this.mockReport;
		}
		console.log(fileTodownload);
		Storage.get(fileTodownload, { level: 'public', download: true }).then(
			(data: any) => {
				let blob = new Blob([data.Body], { type: data.ContentType });
				let link = document.createElement('a');
				link.href = window.URL.createObjectURL(blob);
				link.download = fileTodownload;
				link.click();
			})
	}


	private downloadBlob(blob, filename) {
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename || 'download';
		const clickHandler = () => {
			setTimeout(() => {
				URL.revokeObjectURL(url);
				a.removeEventListener('click', clickHandler);
			}, 150);
		};
		a.addEventListener('click', clickHandler, false);
		a.click();
		return a;
	}

}
