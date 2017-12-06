import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
    <div id="nav">
      <div class="nav-user">
        <a routerLink="/dashboard" 
        routerLinkActive="active" 
        [routerLinkActiveOptions]="{ exact: true }">user<img src="" alt="">
        </a>
      </div>
      <ul class="nav-pet-list">
        <li>
          <a routerLink="/register" 
          routerLinkActive="active" 
          [routerLinkActiveOptions]="{ exact: true }">
          <img src="" alt="register">
          </a>
        </li>
        <li><a href="#"><img src="" alt="dog2"></a></li>
        <li><a href="#"><img src="" alt="add"></a></li>
      </ul>
      <div class="nav-hospital"><a href="#"><img src="" alt="병원"></a></div>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
