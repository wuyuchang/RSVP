import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navToggled = new EventEmitter();
  navOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // If nav is open after routng, close it
    this.router.events
    .filter(e => e instanceof NavigationStart && this.navOpen)
    .subscribe(e => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

}
