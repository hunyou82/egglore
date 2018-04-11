import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//
  constructor(public navCtrl: NavController, public postsService: PostsProvider) {

  }

  ionViewDidLoad() {
    this.postsService.getRemoteData();    
  }

  addPost(post) {
    this.postsService.addItem(post);
  }
}
