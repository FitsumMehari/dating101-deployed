import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';
declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private autservice: AutenticationService) { }

  ngOnInit(): void {
    const slider = document.querySelector('.slider');

    M.Slider.init(slider, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
    });
  }

  navigate() {
    if (!!this.autservice.getUser()) {
      this.router.navigate(['profile']);
    } else {
      this.router.navigate(['register']);
    }
  }
}
