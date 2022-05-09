import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

    globalLanguage = new Subject<string>();
	globalLanguage$ = this.globalLanguage.asObservable();

    setGlobalVar(currentLanguage:string) {
      this.globalLanguage.next(currentLanguage);
    }

    getGlobalVar():Subject<string>{
        return this.globalLanguage;
	}

}