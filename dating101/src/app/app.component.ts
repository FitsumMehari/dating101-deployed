import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'dating101';

  ngOnInit() {
    const sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  }
}
