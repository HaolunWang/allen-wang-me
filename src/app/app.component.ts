import { Component, OnInit } from '@angular/core';
import { TranslateService } from './i18n/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    console.log(translateService.data);
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
