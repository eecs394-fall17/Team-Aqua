import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateGroupPage } from '../create-group/create-group';
import { JoinGroupPage } from '../join-group/join-group';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  createGroupRoot = CreateGroupPage
  joinGroupRoot = JoinGroupPage

  constructor(public navCtrl: NavController) {

  }

  

}