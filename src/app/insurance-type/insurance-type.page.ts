import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonCommanObjectService } from 'src/services/json-comman-object.service.service';
@Component({
  selector: 'app-insurance-type',
  templateUrl: './insurance-type.page.html',
  styleUrls: ['./insurance-type.page.scss'],
})
export class InsuranceTypePage implements OnInit {
  private finalObj;
  constructor(private router: Router, private obj: JsonCommanObjectService,) {
    this.finalObj = this.obj.quteData();
   }

  ngOnInit() {
  }
  InsuranceType(type){
    if(type == 'AUTO'){
      this.router.navigate(['/first-splash']);
    } else{
      this.finalObj.quoteData.quoteType= type;
      this.router.navigate(['/other-primary-name']);
    }
  }

}
