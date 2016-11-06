import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class BloodtestData {
  public currentUser: any;
  public bloodtestList: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.bloodtestList = firebase.database().ref('userProfile/' + this.currentUser + '/bloodtestList');
    console.log(this.bloodtestList);
  }

  getBloodtestList(){
    return this.bloodtestList;
  }

  getBloodtestDetail(bloodtestId: string){
    return this.bloodtestList.child(bloodtestId);
//    return this.bloodtestDetail = this.af.database.object('/userProfile/' + this.userId + '/bloodtestList/' + bloodtestId);
  }

  createBloodtest(bloodtestDesc: string, hdl: number, ldl: number,
                trigl: number, totchol: number, testDate: string = null){
    console.log("createBloodtest function in data provider. Desc=" + bloodtestDesc);
    return this.bloodtestList.push({
      bloodtestDesc: bloodtestDesc,
      hdl: hdl,
      ldl: ldl,
      trigl: trigl,
      totchol: totchol,
      testDate: testDate
    }).then( newBloodtest => {
      this.bloodtestList.child(newBloodtest.key).child('id').set(newBloodtest.key);
    });
  }

 removeBloodtest(bloodtestId: string){
    return this.bloodtestList.remove(bloodtestId);
  }

}