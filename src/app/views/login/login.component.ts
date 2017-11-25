import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { WindowService } from '../../service/window.service';
import { AF } from '../../providers/af';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


export class PhoneNumber {
  country: string;
  
  area: string;
  prefix: string;
  line: string;
  // format phone numbers as E.164
  get e164() {
    const num = "+91" + this.line
    //return `+${num}`
    return num;
  }
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//user: Observable<firebase.User>;
windowRef: any;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;
  
  constructor(private router: Router, public afAuth: AngularFireAuth, public af: AngularFireDatabase, private win: WindowService, private myAuth: AF) {
  

    this.user = this.afAuth.authState;
  };
  
  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phone-sign-in-recaptcha', {
  'size': 'invisible',
});
    this.windowRef.recaptchaVerifier.render();
    
  };
  
  sendLoginCode() {
  
  console.log("here1");
    this.myAuth.loginWithNum(this.phoneNumber.e164, this.windowRef);
/*
    const num = this.phoneNumber.e164;
   // this.windowRef = this.win.windowRef;
    firebase.auth().signInWithPhoneNumber(num, this.windowRef.recaptchaVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
                
            })
            .catch( error => console.log(error) );
            */
   // const appVerifier = this.windowRef.recaptchaVerifier;
    
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {
                    this.user = result.user;
                    console.log(this.user);
                    this.router.navigate(['/dashboard']);
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
  
  login() {
  alert("here");
    this.afAuth.auth.signInAnonymously();
    console.log(this.items);
};

logout() {
    this.afAuth.auth.signOut();
}

Send(desc: string) {
    this.items.push({ message: desc});
    console.log(this.items);
    this.msgVal = '';
}
  /*
  login(myemail: string, mypass: string){
  if(myemail == "test" && mypass=="test")
  {
    this.router.navigate(['/dashboard']);
  }
  else
  {
    alert("Invalid email / pwd");
  }
  }*/
  
 

}
