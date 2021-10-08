import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    this.username = value.username;
    this.password = value.password;

    const user = {
      username: this.username,
      password: this.password
    }
this.authorizationService.logUser(user);

  }

}
