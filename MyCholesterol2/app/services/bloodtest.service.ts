import {Injectable} from '@angular/core';

let PouchDB = require('pouchdb');

@Injectable()
export class BirthdayService {
    private _db;
    private _bloodtests;

    initDB() {
        this._db = new PouchDB('bloodtest2', { adapter: 'websql'})
    }

    add(bloodtest){
        return this._db.post(bloodtest);
    }
}