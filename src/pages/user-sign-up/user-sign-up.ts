import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TutorialPage } from '../tutorial/tutorial';
/**
 * Generated class for the UserSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-sign-up',
  templateUrl: 'user-sign-up.html',
})
export class UserSignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  newUserEnterHome() {
  		this.navCtrl.push(TutorialPage);
  }

  oldUserEnterHome() {
  		this.navCtrl.push(HomePage);
  }

}
