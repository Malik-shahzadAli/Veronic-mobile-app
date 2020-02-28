import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from './../translate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  public selectedValue;
  selectedLanguage: string;
  languageSelect = new FormGroup({
    language : new FormControl('', [
      Validators.required
    ])
  });
  constructor(private translateConfigService: TranslateConfigService,
              public translate: TranslateService,
              private router: Router) {
   }
  ngOnInit() {
  }
  changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.translateConfigService.setLanguage(this.selectedValue);
    localStorage.setItem('language', this.selectedValue);
    // this.translateConfigService.setLanguage(this.selectedLanguage);
    this.router.navigateByUrl('/home');
  }

}
