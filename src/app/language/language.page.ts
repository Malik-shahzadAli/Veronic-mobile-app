import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from './../translate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  public selectedValue;
  // public select = false;
  modelText = '';
  selectedLanguage: string;
  select = false;
  languageSelect = new FormGroup({
    language : new FormControl('', [
      Validators.required
    ])
  });
  constructor(private translateConfigService: TranslateConfigService,
              public translate: TranslateService,
              private router: Router,
              private toastController: ToastController) {
   }
  ngOnInit() {
  }
  changeStatus(e) {
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.translateConfigService.setLanguage(this.selectedValue);
    localStorage.setItem('language', this.selectedValue);
    this.select = true;
    // this.translateConfigService.setLanguage(this.selectedLanguage);
    // this.router.navigateByUrl('/home');
  }
  language(language) {
    this.translateConfigService.setLanguage(language);
    this.select = true;
    localStorage.setItem('language', language);
  }
  async getErrorTost() {
    this.translate.get('select.dropdown').
    subscribe((text: string) => {
      this.modelText = text;
    });
    const toast = await this.toastController.create({
      message: this.modelText,
      duration: 2000
    });
    toast.present();
  }
}
