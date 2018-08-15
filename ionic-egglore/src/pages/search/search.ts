import { Component } from '@angular/core';
import { NavController, NavParams, Platform  } from 'ionic-angular';
@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
  })


export class SearchPage {
    constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform) {
    
    let backAction =  platform.registerBackButtonAction(() => {
        console.log("second");
        this.navCtrl.pop();
        backAction();
        },2)
    
    }
    goBack() {
        this.navCtrl.pop();
    }
}