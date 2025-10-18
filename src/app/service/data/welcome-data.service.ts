import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
export class HelloWorldBean {
  constructor(public message:string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(private httpClient:HttpClient) { }
  executeHelloWorldBeanService(): Observable<HelloWorldBean> {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean`);
    // console.log("execute Hello World bean Service");
  }

  executeHelloWorldBeanServiceWithPath(name: string): Observable<HelloWorldBean> {
  return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/users/${name}`);
    // console.log("execute Hello World bean Service");
  }
  
}
