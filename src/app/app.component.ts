import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateConfigService } from './translate-config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  selectedLanguage: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService,
  ) {
    this.initializeApp();
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
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
}
