import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }
  authenticate(username: string,password: string){
    console.log("before  -> " + this.isUserLoggedIn());
     if (username == "om" && password == "dummy"){
      console.log("after  ->"+ this.isUserLoggedIn());
      sessionStorage.setItem("authenticaterUser", username);

       return true;
     }
     return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
      return !(user===null);
  }
  userLoggedOut(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
