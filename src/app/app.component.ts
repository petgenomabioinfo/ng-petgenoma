import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Hub, Auth, Storage } from 'aws-amplify';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	//formFields: FormFieldTypes;
	//user: CognitoUserInterface | undefined;
	//authState: AuthState;

	constructor(private ref: ChangeDetectorRef, public authenticator: AuthenticatorService) {
		Hub.listen('auth', (data) => {
			switch (data.payload.event) {
				case 'signIn':
					console.log('user signed in');
					break;
				case 'signUp':
					console.log('user signed up');
					break;
				case 'signOut':
					console.log('user signed out');
					break;
				case 'signIn_failure':
					console.log('user sign in failed');
					break;
				case 'configured':
					console.log('the Auth module is configured');
			}
		});
		// this.formFields = [
		// 	{
		// 		type: "username",
		// 		label: "Email Address *",
		// 		placeholder: "Email",
		// 		required: true,
		// 	},
		// 	{
		// 		type: "password",
		// 		label: "Password *",
		// 		placeholder: "Password",
		// 		required: true,
		// 	},
		// 	{
		// 		type: "phone_number",
		// 		label: "Phone Number",
		// 		placeholder: "",
		// 		required: false,
		// 	},
		// ];
	}

	ngOnInit() {
		// onAuthUIStateChange((authState, authData) => {
		// 	this.authState = authState;
		// 	this.user = authData as CognitoUserInterface;
		// 	this.ref.detectChanges();
		//   })
	}

	handleSignInSubmit(event: any) {
		console.log('User Signed in!', event);
	}

	ngOnDestroy() {
		//return onAuthUIStateChange;
	}

	logOut() {
		this.authenticator.signOut();
		//TODO : reinitialize variables
	}
}