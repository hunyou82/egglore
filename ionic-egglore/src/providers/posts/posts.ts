import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {

  posts: any = []; 
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http:HttpClient) {
    console.log('Hello PostsProvider Provider');
  }

  getRemoteData() {
    this.http.get(this.apiUrl).subscribe(data => {
      console.log(data);
    });
  }

  load() {
    this.posts = [
      {title: 'Hello', summary: 'somthing'},
      {title: 'Hello2', summary: 'somthing2'},
      {title: 'Hello3', summary: 'somthing3'},
      {title: 'Hello4', summary: 'somthing4'},      
      {title: 'Hello5', summary: 'somthing5'},            
    ];    
  }  

  addItem(post){

  }

  editItem() {

  }

  getItem(id) {

  }

  reorder() {
    
  }

  getUsers() {
   /* if (this.data) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });*/
  }  
}
