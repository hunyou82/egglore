import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //egg: number;
  egg1: string = "aaa";

  money = 100000;

  second_time = 60*60*24*30;
  moneyPerSecond = this.money/this.second_time;

  /*Observable.interval(function() {
    this.egg = moneyPerSecond)
  , 1000);*/
 

  egg = this.moneyPerSecond;

  si = setInterval(() => {
    console.log("1");
    this.egg += this.moneyPerSecond;
  },1000);

  constructor(public navCtrl: NavController) {

  }

}
