import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  message:string;
  counties: string[] = [];
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  
  this.message = this.navParams.get('message');
  this.counties = this.navParams.get('counties');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
