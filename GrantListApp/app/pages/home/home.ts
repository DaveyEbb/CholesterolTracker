import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

items 
i

  constructor(private navCtrl: NavController, private http: Http) {
    this.http.get("http://api.randomuser.me/?results=100").subscribe (data => {
      this.items = JSON.parse(data['_body']).results;
      console.log("Got results");
    }, error => {
      console.log(error);
    });
  }

itemClicked (event, item) {
  console.log(item.title);
}

removeItem (item) {
  for (this.i = 0; this.i < this.items.length; this.i++) {
    if (this.items[this.i] == item) {
      this.items.splice(this.i, 1);
    }

  }
}

}
