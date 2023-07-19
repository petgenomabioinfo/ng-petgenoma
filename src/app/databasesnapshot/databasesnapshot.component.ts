import { Component, OnInit } from '@angular/core';
import { Auth, Storage } from 'aws-amplify';
import { APIService } from '../API.service';
import { AuthenticatorService } from '@aws-amplify/ui-angular';


export class userData {
	id: String;
	firstname: String;
	lastname: String;
	phoneNb: String;
	street: String;
	city: String;
	postalCode: String;
	researchAuthorization: String;
	surveyAuthorization: String;
	userMail: string;
	userPhone: string;
	dateCreated: string;
	dateUpdated: string;
}
export class kitData {
	kitId: string;
	userId: string;
	dateCreated: string;
	dateUpdated: string;
	kitType: string;
	petName: string;
	kitStatus: string;
}

@Component({
	selector: 'app-databasesnapshot',
	templateUrl: './databasesnapshot.component.html',
	styleUrls: ['./databasesnapshot.component.scss']
})

export class DatabasesnapshotComponent implements OnInit {

	kits: any[];
	//kits: kitData[] = [];
	isDataLoaded = false;
	isUserLoaded = false;
	constructor(private api: APIService, private authenticator: AuthenticatorService) {
		this.initData();
	}

	ngOnInit(): void {
		this.initData().then(() => { this.isDataLoaded = true; })
	}

	async initData() {
		return await this.api.ListKits().then((res) => {
			this.isUserLoaded = true;
			let kitslist = [];
			let currentuser;
			//Promise.all(
			res.items.map(
				(kit) => {
					let currentkit: any = kit;
					this.loadUser(kit.user).then(user => { currentkit.userMail = user.email; });
					kitslist.push(currentkit);
				});
			this.kits = res.items;
			//for (const kit of this.kits){
			//	const userId = this.loadUser(kit.userID);
			//	kit.userMail = userId;
			//}
		});
	}

	async loadUser(userId) {
		return await this.api.GetUser(userId);
	}

}
