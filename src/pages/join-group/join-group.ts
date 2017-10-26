import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { MeetingPage } from '../meeting/meeting'

/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-join-group',
  templateUrl: 'join-group.html',
})
export class JoinGroupPage {

  constructor(public navCtrl: NavController, private app: App) {
  }

  goToMeeting() {
  		this.app.getRootNav().push(MeetingPage);
  }

}
