import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

var PouchDB = require('pouchdb');

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  data: any;

  constructor() {
    
 
      this.db = new PouchDB('mytestdb');
      this.username = 'inernothissideseavereath';
      this.password = '7fb80c1a0a4eddbc36676ad628c5f6da9aef611d';
      this.remote = 'https://2d8b788c-f99f-4e06-a9cf-44283ab350f2-bluemix.cloudant.com/mytestdb';

      let options = {
        live: true,
        retry: true,
        continuous: true,
        auth: {
          username: this.username,
          password: this.password
        }
      };

      this.db.sync(this.remote, options);

    }

  addDocument(doc) {
    this.db.put(doc);
  }

  getDocuments() {

    return new Promise(resolve => {

      this.db.allDocs({

        include_docs: true

      }).then((result) => {

        this.data = [];

        let docs = result.rows.map((row) => {
          this.data.push(row.doc);
          resolve(this.data);
        });

        this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', (change) => {
          this.handleChange(change);
        });

      }).catch((error) => {

          console.log(error);

        });

    });

  }

  handleChange(change) {

    let changedDoc = null;
    let changedIndex = null;

    this.data.forEach((doc, index) => {

      if (doc._id === change.id) {
        changedDoc = doc;
        changedIndex = index;
      }

    });

    //A document was deleted
    if (change.deleted) {
      this.data.splice(changedIndex, 1);
    }
    else {

      //A document was updated
      if (changedDoc) {
        this.data[changedIndex] = change.doc;
      }
      //A document was added
      else {
        this.data.push(change.doc);
      }

    }

  }






  }
/*
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
*/
