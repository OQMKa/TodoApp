import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name : string = 'om';   
  constructor(private router: Router,
    private service: WelcomeDataService
  ) {

  }
  welcomeMessageFromService: string = 'Customized welcome message';
  errorMessageFromService: string = 'Error Message';
  
  ngOnInit(): void {
    // this.getWelcomeMessage()
  }
  
  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe({
      next:response => this.handleSuccessfulResponse(response),
      error:error => this.handleErrorResponse(error)
  });
  }
  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
  }
  handleErrorResponse(error: any) {
    this.errorMessageFromService = error.error.message;
    console.log(error.error.messageror);
  }

  gotoToDosManager() {
    this.router.navigate(['listtodo']);
  }
}
