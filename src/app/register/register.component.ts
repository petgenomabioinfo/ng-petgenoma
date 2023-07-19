import { Component, OnInit } from '@angular/core';
import { Auth, Storage } from 'aws-amplify';
import { APIService } from '../API.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserFront, DogFront, KitFront } from '../models/all.model';
import * as Mappers from '../mappers/all.mapper';
import * as uuid from 'uuid';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	connectedUser;
	adddog = false;
	addkit = false;
	idDogSelected: string = '';
	user: UserFront = new UserFront('', '', '', '', '', '', '', '', '', '', '');
	dogs: DogFront[] = [];
	kits: KitFront[] = [];
	dog: DogFront = new DogFront('', '', '', '', '', '', '', null);
	kit: KitFront = new KitFront('', '', '', '', '', '', '' ,null, null);

	kitNamePattern = "^[A-Z]{2}[0-9]{8}$";

	constructor(private api: APIService, private translate: TranslateService, private router: Router, private toastr: ToastrService) {
		Auth.currentUserInfo().then((user) => {
			this.connectedUser = user;
		}).then(() => {
			this.loadUserDatas();
		});
	}

	ngOnInit(): void {
		if (localStorage.getItem('language')) {
			this.translate.setDefaultLang(localStorage.getItem('language'));
		} else {
			this.translate.setDefaultLang('en');
		}
	}

	loadUserDatas() {
		// LOAD USER DATA
		this.loadUser();
		this.loadDogs();
		this.loadKits();
	}

	loadUser() {
		this.api.GetUser(this.connectedUser.username).then(
			res => {
				if (res) {
					this.user = Mappers.mapUserAPItoFront(res);
				} else {
					console.log('No user registered');
				}
			});
	}

	loadDogs(){
		this.api.ListDogs({userDogsId: { eq: this.connectedUser.username }}).then(
			res => { 
				if (res) {
					this.dogs = Mappers.mapListDogsAPItoFront(res);
				} else {
					console.log('No dog registered');
				}
			});
	}

	loadKits() {
		this.api.ListKits({userKitsId: { eq: this.connectedUser.username }}).then(
			res => { 
				if (res) {
					this.kits = Mappers.mapListKitsAPItoFront(res);
				} else {
					console.log('No kit registered');
				}
			});
	}

	translateText(text){
		return this.translate.instant(text);
	}

	addkitclick(){
		if (this.dogs.length > 0) {
			this.addkit = true;
		} else {
			this.toastr.error('You need to register a dog first', 'Error' , {positionClass: 'toast-bottom-right'});
		}
	}
	
	saveKit() {
		this.kit.id = uuid.v4();
		this.kit.userKitsId = this.connectedUser.username;
		this.kit.petName = this.dogs.find(dog => dog.id === this.idDogSelected).name;
		this.kit.dogKitsId = this.idDogSelected;
		this.kit.registrationDate = new Date().toISOString();
		console.log(this.kit);
		this.api.CreateKit(Mappers.mapKitFrontToAPI(this.kit)).then(
			res => {
				this.router.navigate(['/register']);
				this.toastr.success('Kit Successfully Registered');
			},
			err => {
				this.toastr.error('Something went wrong');
				console.log('Error : ' + err.errors[0].message);
			}
		);
		this.addkit = false;
		this.loadKits();
	}

	saveUser() {
		this.user.id = this.connectedUser.username;
		this.api.UpdateUser(Mappers.mapUserFrontToAPI(this.user)).then(
			res => {
				this.router.navigate(['/register']);
				this.toastr.success('User Successfully Registered');
			},
			err => {
				this.toastr.error('Something went wrong');
				console.log('Error : ' + err.errors[0].message);
			}
		);
	}

	adddogclick() {
		this.adddog = true;
	}

	saveDog() {
		this.dog.id = uuid.v4();
		this.dog.userDogsId = this.connectedUser.username;
		this.api.CreateDog(Mappers.mapDogFronttoAPI(this.dog)).then(
			res => {
				this.router.navigate(['/register']);
				this.toastr.success('Kit Successfully Registered');
			},
			err => {
				this.toastr.error('Something went wrong');
				console.log('Error : ' + err.errors[0].message);
			}
		);
		this.adddog = false;
		this.loadDogs();
	}

	useLanguage(language: string) {
		this.translate.use(language);
	}

	cancelDog() {
		this.adddog = false;
	}

	cancelKit() {
		this.addkit = false;
	}

}
