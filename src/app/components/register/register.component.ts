import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: any;
  email: any;
  password: any;
  password2: any;

  constructor(private authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  registerUser(user: any) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.password2 = user.password2;

    const userDetails = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    this.authService.registerUser(userDetails).subscribe();
  }

}
