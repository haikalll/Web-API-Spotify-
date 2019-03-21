import { Component, Directive } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
//import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-app',
  template: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [NavBarComponent],
  precompile: [SearchComponent, AboutComponent]
})
export class AppComponent {
  name = 'Angular 5';
}
