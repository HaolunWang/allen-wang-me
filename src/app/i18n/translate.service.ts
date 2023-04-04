import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  data: any = {};

  constructor(private http: HttpClient) {}

  use(lang: string): Promise<{}> {
    return new Promise<{}>(resolve => {
      const localLangPath = `assets/i18n/${lang || 'i18n-en.json'}`; // applied on localhost or remote server
      const langPath = `https://raw.githubusercontent.com/HaolunWang/allen-wang-me/main/src/assets/i18n/${lang || 'i18n-en.json'}`;
      console.log("langPath: " + localLangPath); // temporary change
      this.http.get(localLangPath).subscribe( // temporary change
        response => {
          this.data = response || {};
          resolve(this.data);
        },
        err => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
