import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	constructor(public shared: SharedService, private translate: TranslateService) { 
		//translate.setDefaultLang('en');
	}

  ngOnInit(): void {
  }


  useLanguage(language: string) {
	this.shared.setGlobalVar(language);
	this.translate.use(language);
	console.log('change lang',  language);
  }

}
