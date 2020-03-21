import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
// environment
@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.page.html',
  styleUrls: ['./my-quotes.page.scss'],
})
export class MyQuotesPage implements OnInit {
  public totalQuotes;
  public quotesArray;
  public createdAtArray=[] ;
  public status;
  constructor( private http: HttpClient,  public loadingController: LoadingController) { }

  ngOnInit() {
    // this.presentAlert();
   
    // console.log(now);
    const Jwt = localStorage.getItem('jwt');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: Jwt
      })
    };
    this.http.get(environment.baseUrl + '/api/subscribers/quotes', httpOptions).subscribe(
      (response) => {
        // this.loadingController.dismiss();
        this.totalQuotes = response['totalAssociatedQuotes'];
        this.quotesArray = response['associatedQuotes'];
        // this.createdAt = response['associatedQuotes']['createdAt'];
        // this.createdAt = new Date();
        console.log(response);
        for(let i = 0; i < this.quotesArray.length; i++) {
          const now = moment().toISOString();
          const nowDay = parseInt( now.slice(8, 10));
          console.log(this.quotesArray[i]['createdAt']);
          const createdAt = this.quotesArray[i]['createdAt'];
          // this.createdAtArray.push(createdAt);
          // var duration = moment.duration(now.diff());
          const createdAtDay = parseInt(createdAt.slice(8, 10));
          // console.log(',,,,,' + nowDay);
          if ( (nowDay - createdAtDay) > 1  ) {
            this.createdAtArray.push('expire');
          } else {
            this.createdAtArray.push('active');
          }
        }
        // console.log(this.createdAt);
        // const date = moment(this.createdAt);
        // console.log('Date '+ date)
        // var now = moment(new Date());
        // console.log('now '+ now)
        // console.log(compare("11/07/2015", "10/07/2015"));
        // console.log(moment().diff(this.createdAt, 'minutes'));
        // var duration = moment.duration(now.diff(date));
        // var hours = duration.asHours();
        // console.log(hours);
        // const dateObj = new Date();
        // dateObj.setDate(dateObj.getDate() - 1);
        // console.log(dateObj);
        // const diffTime = Math.abs(this.createdAt - dateObj);
        // console.log('-----------')
        // const day = new Date();
        // console.log(day.getDate() - 1);
        // console.log(this.createdAt.get)
        // this.loadingController.dismiss('login');
      }, (err) => {
        console.log(err);
        // this.loadingController.dismiss();
    });
  }

  async presentAlert() {
    const loading = await this.loadingController.create({
      id: 'alert'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
