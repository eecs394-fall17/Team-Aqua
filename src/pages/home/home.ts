import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateGroupPage } from '../create-group/create-group';
import { JoinGroupPage } from '../join-group/join-group';
import { UserStatisticsPage } from '../user-statistics/user-statistics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userStatisticsRoot = UserStatisticsPage
  createGroupRoot = CreateGroupPage
  joinGroupRoot = JoinGroupPage

  constructor(public navCtrl: NavController) {

  }

  

}