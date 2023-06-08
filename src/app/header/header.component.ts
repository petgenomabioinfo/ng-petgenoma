import { TranslateService } from '@ngx-translate/core';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // user: CognitoUserInterface | undefined;
  // authState: AuthState;

  constructor(private translate: TranslateService, private ref: ChangeDetectorRef, public authenticator: AuthenticatorService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // onAuthUIStateChange((authState, authData) => {
    //   this.authState = authState;
    //   this.user = authData as CognitoUserInterface;
    //   this.ref.detectChanges();
    // })
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnDestroy() {
    //return onAuthUIStateChange;
  }


}
