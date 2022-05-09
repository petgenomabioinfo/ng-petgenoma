import { Component, ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { FormFieldTypes } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	formFields: FormFieldTypes;
	user: CognitoUserInterface | undefined;
  	authState: AuthState;

	constructor(private ref: ChangeDetectorRef) {
		this.formFields = [
			{
				type: "username",
				label: "Email Address *",
				placeholder: "Email",
				required: true,
			  },
			{
			  type: "password",
			  label: "Password *",
			  placeholder: "Password",
			  required: true,
			},
			{
			  type: "phone_number",
			  label: "Phone Number",
			  placeholder: "",
			  required: false,
			},
		  ];
	}
  
	ngOnInit() {
		onAuthUIStateChange((authState, authData) => {
			this.authState = authState;
			this.user = authData as CognitoUserInterface;
			this.ref.detectChanges();
		  })
	}

	handleSignInSubmit(event: any) {
		console.log('User Signed in!', event);
	}
  
	ngOnDestroy() {
	  return onAuthUIStateChange;
	}
  }