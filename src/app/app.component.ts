import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <sidebar></sidebar>
   <router-outlet></router-outlet>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
