import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { url } from 'src/commonurl/commonurl';
import { ToastController } from '@ionic/angular';
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
  constructor( private http: HttpClient, public loadingController: LoadingController, public toastController: ToastController) { }
  ngOnInit() {
    const Jwt = localStorage.getItem('jwt');
    this.fetchQuotes(Jwt);

  }

  fetchQuotes(Jwt){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: Jwt
      })
    };
    // this.presentAlert();
    this.http.get(url.baseurl + '/api/subscribers/quotes', httpOptions).subscribe(
      (response) => {
        this.totalQuotes = response['totalAssociatedQuotes'];
        this.quotesArray = response['associatedQuotes'];
        console.log(response);
        for(let i = 0; i < this.quotesArray.length; i++) {
          const now = moment().toISOString();
          const nowDay = parseInt( now.slice(8, 10));
          console.log(this.quotesArray[i]['createdAt']);
          const createdAt = this.quotesArray[i]['createdAt'];
          const createdAtDay = parseInt(createdAt.slice(8, 10));
          if ( (nowDay - createdAtDay) > 1  ) {
            this.createdAtArray.push('expire');
            this.quotesArray[i]['createdAt'] = 'expire'
          } else {
            this.createdAtArray.push('active');
            this.quotesArray[i]['createdAt'] = 'active'
          }
        }
        console.log(this.quotesArray)
      }, (err) => {
        console.log(err);
        // this.loadingController.dismiss();
        this.getErrorTost();
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

  
  // Toast Error .......
  async getErrorTost() {
    const toast = await this.toastController.create({
      message: 'Sorry quotes not found!',
      duration: 2000
    });
    toast.present();
  }
}
