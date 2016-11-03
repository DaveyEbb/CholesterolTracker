import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class BloodtestData {
  public currentUser: any;
  public bloodtestList: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.bloodtestList = firebase.database().ref('userProfile/' + this.currentUser + '/bloodtestList');
  }

  getBloodtestList(){
    return this.bloodtestList;
  }

  getBloodtest(bloodtestId: string){
    return this.bloodtestList.child(bloodtestId);
//    return this.bloodtestDetail = this.af.database.object('/userProfile/' + this.userId + '/bloodtestList/' + bloodtestId);
  }

  createBloodtest(bloodtestDesc: string, hdl: number, ldl: number,
                trigl: number, totchol: number, testDate: string = null){
    return this.bloodtestList.push({
      bloodtestDesc: bloodtestDesc,
      hdl: hdl,
      ldl: ldl,
      trigl: trigl,
      totchol: totchol,
      testDate: testDate
    });
  }

 removeBloodtest(bloodtestId: string){
    return this.bloodtestList.remove(bloodtestId);
  }

}