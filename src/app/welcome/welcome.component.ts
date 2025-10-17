import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
constructor(private router: Router,
    private service: WelcomeDataService
  ) {

  }
  getWelcomeMessage() {
    // this.welcomeDataService.executeHelloWorldBeanService()-.subscribe();
    this.service.executeHelloWorldBeanService();
  }

  gotoToDosManager() {
    this.router.navigate(['listtodo']);
  }
}
