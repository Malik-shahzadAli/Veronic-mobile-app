
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  finish() {
    localStorage.setItem('isIntroDone', 'yes');
  }

}
