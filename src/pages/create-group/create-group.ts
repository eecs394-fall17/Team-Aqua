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
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {

  constructor(public navCtrl: NavController, private app: App) {
    }

   joinMeeting() {
  		this.app.getRootNav().push(MeetingPage);
  }

  
}
