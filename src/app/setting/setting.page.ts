import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../translate-config.service';
// TranslateConfigService
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  public selectedLanguage;
  constructor(private translateConfigService: TranslateConfigService) { }

  ngOnInit() {
    if (window.localStorage && window.localStorage.getItem('language'))  {
    this.selectedLanguage = window.localStorage.getItem('language');
    } else{
      this.selectedLanguage = "en"
    }
  }
  onChange(ev){
    console.log(ev.detail.value)
    this.translateConfigService.setLanguage(ev.detail.value);
    localStorage.setItem('language', ev.detail.value);
  }


}
