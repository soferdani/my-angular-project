import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  title = "Dani's surfboard Shop";
  subtitle = "Welcome to my shop";


  constructor() { }

  ngOnInit(): void {
  }

}
