import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { SearchPage } from '../search/search';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
////
  constructor(public navCtrl: NavController, public postsService: PostsProvider) {

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
