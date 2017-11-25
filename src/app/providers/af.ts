import {Injectable} from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { WindowService } from '../service/window.service';

@Injectable()
export class AF {

  constructor(public af: AngularFireAuth) {}
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  

loginWithNum(num, win) {
  
  console.log("here1");
    

   
    firebase.auth().signInWithPhoneNumber(num, win.recaptchaVerifier)
            .then(result => {
                win.confirmationResult = result;
                
            })
            .catch( error => console.log(error) );
   
    
  };
  
  /**
   * Logs out the current user
   */
  
}