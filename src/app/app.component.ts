import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AutenticationService } from './services/autentication.service';
declare const M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'dating101';
  profile = 'Sign In';

  constructor(private autService: AutenticationService) { }

  ngOnInit() {
    const sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});

    if (!!this.autService.getUser()) {
      this.profile = this.autService.getUser();
    } else {
      this.profile = 'Sign In';
    }
  }
}
