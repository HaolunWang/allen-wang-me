import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from './i18n/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService, private elementRef: ElementRef) {
    console.log(translateService.data);
  }

  ngOnInit(): void {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    document.body.classList.toggle('dark-theme', prefersDark.matches);

    this.hideDropdownList();
  }

  // work with hideDropdownList()
  // ngAfterViewInit() {
  //   this.dropdownClass = this.elementRef.nativeElement.querySelector('.dropdown-content');
  //   console.log(this.dropdownClass.style.display);
  // }

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

  // showDropdown:boolean = false;
  // dropdownClass: any;
  // @ViewChild("sampleComponent") sampleComponent: ElementRef<any>;

  setLang(lang: string) {
    console.log(lang);
    this.translateService.use(lang);
  }

  // show or hide dropdown list after clicking button - implement by normal way in Angular
  // showOrHideDropdownList() {
  //   this.showDropdown = !this.showDropdown;
  //   console.log("showDropdown: " + this.showDropdown);
  // }

  // showOrHideDropdownListAndSetLang(lang: string) {
  //   this.setLang(lang);
  //   this.showDropdown = !this.showDropdown;
  //   console.log("showDropdown: " + this.showDropdown);
  // }

  //hide dropdown list after clicking dropdown option - implement by manipulate HTML element
  hideDropdownListAndSetLang(lang: string) { // ? means parameter lang IS OPTIONAL
    // this.dropdownClass.style.display = 'none';


    // console.log("this.dropdownList.style.display: " + this.dropdownClass.style.display);
    // if (this.dropdownClass.style.display === 'none') {
    //   this.dropdownClass.style.display = 'block';
    // } else if (this.dropdownClass.style.display === 'block') {
    //   this.dropdownClass.style.display = 'none';
    // }

    console.log(lang);
    this.setLang(lang);
    var x = document.getElementById("dropdownlist");
    if (x != null) {
      console.log("before: " + x.style.display);
      x.style.display = "none";
      console.log("after: " + x.style.display);
    }

    // var x = document.getElementById("dropdownlist");
    // if (x != null && x.style.display === "none") {
    //   console.log(x.style.display);
    //   x.style.display = "block"; 
    // } else if (x != null && x.style.display === "block") {
    //   console.log(x.style.display);
    //   x.style.display = "none"; 
    // }
  }

  hideDropdownList() {
    var x = document.getElementById("dropdownlist");
    if (x != null) {
      console.log("before: " + x.style.display);
      x.style.display = "none";
      console.log("after: " + x.style.display);
    }
  }

  showDropdownList() {
    var x = document.getElementById("dropdownlist");
    if (x != null) {
      console.log("before: " + x.style.display);
      x.style.display = "block";
      console.log("after: " + x.style.display);
    }

    // this.dropdownClass.style.display = 'block';
  }
  
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

}
