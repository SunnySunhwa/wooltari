import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface pets {
  owner: object;
  pets: string;
}

interface pet {
  pk: number;
  species: string;
}
@Component({
  selector: 'app-sidebar',
  template: `
  <nav>
      <div class="nav-user" [ngClass]="{sidebarPushRight: isActive}">
        <a [routerLink]= "['/dashboard']" 
        [routerLinkActive]= "['router-link-active']" 
        [routerLinkActiveOptions]="{ exact: true }">user<img src="" alt="">
        </a>
      </div>
      <ul class="nav-pet-list">
        <li>
          <a [routerLink]="['/register']" 
          [routerLinkActive]="['router-link-active']" 
          [routerLinkActiveOptions]="{ exact: true }">
          <img src="" alt="register">
          </a>
        </li>
        <li><a href="#"><img src="" alt="dog2"></a></li>
        <li><a href="#"><img src="" alt="add"></a></li>
      </ul>
      <div class="nav-hospital"><a href="#"><img src="" alt="병원"></a></div>
    </nav>
    
    <router-outlet></router-outlet>
    <!--<ul>
      <li *ngFor= "let pet of pets">{{pet}}</li>
    </ul>-->
    <nav class="sidebar">
     <pre> {{ pett.pets }}</pre>
    

  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isActive: boolean = false;
  showMenu: string = '';
  pets: string;
  appUrl: string = 'http://wooltari-test-server-dev.ap-northeast-2.elasticbeanstalk.com/profile/2/pets/';

  constructor (@Inject(HttpClient) private http: HttpClient){}


    ngOnInit() {
      this.getPets();
      let pett = JSON.parse(this.pets);
    }

    getPets() {
      this.http.get<pet>(this.appUrl)
        .subscribe(pets => {
          this.pets = pets;},
        err => console.log (err.status, err.url),
        () => console.log('Done'));
      // this.todos = [
      //   { id: 3, content: 'HTML', completed: false },
      //   { id: 2, content: 'CSS', completed: true },
      //   { id: 1, content: 'Javascript', completed: false }
      // ];
    }
  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
}