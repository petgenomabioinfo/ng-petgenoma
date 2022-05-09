import { Component, OnInit } from '@angular/core';
import { Auth, Storage } from 'aws-amplify';
import { APIService } from '../API.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	connectedUser;
	kit = {
		id: '',
		kitType: 'Health',
		userID: '',
		processStatus: '',
		registrationDate: '',
		petName: '',
		vetName: ''
	};
	kitNamePattern = "^[A-Z]{2}[0-9]{8}$"; 

  constructor(private api: APIService, private translate: TranslateService, private router: Router, private toastr: ToastrService) { 
	Auth.currentUserInfo().then((user) =>{
		this.connectedUser = user;
	});
  }

  ngOnInit(): void {
  }

  saveKit() {
	  this.kit.processStatus = 'Registered';
	  this.kit.userID = this.connectedUser.username;
	  this.kit.registrationDate = new Date().toString();
	  this.api.CreateKit(this.kit).then( 
		res => {
			this.router.navigate(['/home']);
			this.toastr.success('Kit Successfully Registered');
		},
		err =>{
			this.toastr.error('Something went wrong');
			console.log('Error : ' + err.errors[0].message);
		}
	);
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
  
}
