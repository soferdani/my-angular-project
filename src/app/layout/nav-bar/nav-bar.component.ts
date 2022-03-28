import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILink } from './nav-bar.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public get count(): number {
    return 0;
  }

  userName: string | null = null;
  subscription: Subscription = new Subscription();

  links: ILink[] = [
    { path: 'feed', label: 'feed' },
    { path: 'home', label: 'home' },
  ];

  constructor() { }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
