import { Component, enableProdMode, OnInit } from '@angular/core';
import { TranslateService } from './i18n/translate.service';
import { environment } from './../environments/environment';

if (environment.production) {
  enableProdMode(); // to resolve "ngular is running in development mode. Call enableProdMode() to enable production mode."
  if(window){
    window.console.log = window.console.warn = window.console.info = function(){ 
      // Don't log anything.
      // Don't log to console in production environment.
    };
  }
  // window.console.log = function () { }; // this overwrites all console logs with blank function.
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    console.log(translateService.data);
    console.log("environment.production: ", environment.production); // show configuration in environment.ts
  }

  setLang(lang: string) {
    console.log(lang);
    this.translateService.use(lang);
  }
  
  welcome = 'welcome';
  languages = 'languages';
  mySite = 'mySite';
  instruction = 'instruction';
  description = 'description';
  cardName1 = 'cardName1';
  cardName2 = 'cardName2';
  cardName3 = 'cardName3';
  techStack = 'techStack';
  techStackDescription = 'techStackDescription';

  footerDescription1 = 'footerDescription1';
  footerDescription2 = 'footerDescription2';

  ngOnInit(): void {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    document.body.classList.toggle('dark-theme', prefersDark.matches);
  }
  
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

}
