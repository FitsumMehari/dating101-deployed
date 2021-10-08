import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticationService } from '../services/autentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(private authenticationService: AutenticationService) { }

  canActivate() {
    const userExists = !!this.authenticationService.getUser()
    //   if (userExists) {
    //     return true;
    //   } else { return false }
    return userExists ? true : false;
  }
}
