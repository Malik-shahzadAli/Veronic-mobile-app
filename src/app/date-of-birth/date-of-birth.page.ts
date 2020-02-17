import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.page.html',
  styleUrls: ['./date-of-birth.page.scss'],
})
export class DateOfBirthPage implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
