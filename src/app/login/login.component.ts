import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,
    private hardcoded:HardCodedAuthenticationService
  ){}
  username = "om";
  password = "dummy";
  invalidLogin = false;
  errorMessage = "Invalid Creds!";

  handleLogin() {
    // throw new Error('Method not implemented.');
    if (this.hardcoded.authenticate(this.username,this.password)) {
      this.invalidLogin = false;
      console.log("login Success!...");
      this.router.navigate(['welcome']);
      // console.log("login Success!2...")
    } else {
      this.invalidLogin = true;
      console.log("login Failed!...")
      this.router.navigate(['error']);
    }

  }

}
