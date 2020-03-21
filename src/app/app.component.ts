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
import { Plugins } from '@capacitor/core';
// import {url} from 'src/url/config.json';
// import { Url } from 'url';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  selectedLanguage: string;
  public jwt: boolean;
  public userNumber: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService,
    private router: Router,
    public alertController: AlertController,
    // private url: url
  ) {
    this.initializeApp();
    // this.presentAlertConfirm();
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
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
    console.log('openFirst');
  }

  openEnd() {
    this.menu.open('end');
    console.log('openEnd');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
    console.log('custom');
  }
  menuOpened() {
    console.log('Ion Did Open');
    if (window.localStorage && window.localStorage.getItem('jwt') && window.localStorage.getItem('userNumber') ) {
      this.jwt = true;
      this.userNumber = window.localStorage.getItem('userNumber');
    } else {
      this.jwt = false;
      this.userNumber = 'Login';
    }
  }
  // languageChanged() {
  //   this.translateConfigService.setLanguage(this.selectedLanguage);
  // }
  ngOnInit() {
    if (window.localStorage && window.localStorage.getItem('isIntroDone') && window.localStorage.getItem('language'))  {
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
