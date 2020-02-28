import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateConfigService } from './translate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import { type } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  selectedLanguage: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService,
    private router: Router,
    public alertController: AlertController
  ) {
    this.initializeApp();
    // this.presentAlertConfirm();
    // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }





  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  // languageChanged() {
  //   this.translateConfigService.setLanguage(this.selectedLanguage);
  // }
  ngOnInit() {
    if (window.localStorage && window.localStorage.getItem('isIntroDone'))  {
      const language = window.localStorage.getItem('language');
      this.translateConfigService.setLanguage(language);
      this.router.navigateByUrl('/first-splash');
      window.localStorage.setItem('firstRunFinished', 'true');
    }
  }
  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Language',
  //     message: 'Please Select a Language',
  //     buttons: [
  //       {
  //         text: 'English',
  //         handler: () => {
  //           this.selectedLanguage = 'en';
  //           this.translateConfigService.setLanguage(this.selectedLanguage);
  //         }
  //       },
  //       {
  //         text: 'Spanish',
  //         handler: () => {
  //           this.selectedLanguage = 'sp';
  //           this.translateConfigService.setLanguage(this.selectedLanguage);
  //           // console.log(Language.value);
  //         }
  //       }
  //     ],
  //     backdropDismiss: false
  //   });

  //   await alert.present();
  // }
}
