import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  logUser(user: any) {

  }

  registerUser(userDetails: any) {
    return this.http.post('http://localhost:8000/users/register', {
      username: userDetails.username,
      email: userDetails.email,
      password: userDetails.password
    }, {
      'headers': {
        'Content-Type': 'application/json'
      }
    })
  }
}
