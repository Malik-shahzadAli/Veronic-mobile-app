import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-primary-name',
  templateUrl: './primary-name.page.html',
  styleUrls: ['./primary-name.page.scss'],
})
export class PrimaryNamePage implements OnInit {

  constructor( public translate: TranslateService) { }

  ngOnInit() {
  }

}
