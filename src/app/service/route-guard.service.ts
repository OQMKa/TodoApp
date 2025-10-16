import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class RouteGuardService {

//   constructor() { }
// }
export const routeGuard: CanActivateFn = (route, state) => {

  const authService = inject(HardCodedAuthenticationService);
  const router = inject(Router);

  if (authService.isUserLoggedIn()) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};
