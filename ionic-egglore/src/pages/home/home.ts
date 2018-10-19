import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PostsProvider } from '../../providers/posts/posts';
import { SearchPage } from '../search/search';
import { AccountPage } from '../account/account';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
////
  constructor(public navCtrl: NavController, public postsService: PostsProvider, public storage: Storage) {

  }

  ionViewDidLoad() {
    this.postsService.getRemoteData();    
  }

  addPost(post) {
    this.postsService.addItem(post);
  }

  goSearch() {
    this.navCtrl.push(SearchPage);
  }

  goAccount() {
    this.navCtrl.push(AccountPage);
  }
}
