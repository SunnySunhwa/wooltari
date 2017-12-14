import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface list {
  owner: object;
  pets: Array<pet>;
}

interface pet {
  pk: number;
  species: string;
  breeds: string;
  name: string;
}

@Component({
  selector: 'app-sidebar',
  template: `
  <nav>
      <div class="nav-user" [ngClass]="{sidebarPushRight: isActive}">
        <a [routerLink]= "['/membership']" 
        [routerLinkActive]= "['router-link-active']" 
        [routerLinkActiveOptions]="{ exact: true }">user<img src="" alt="">
        </a>
      </div>
      <ul class="nav-pet-list">
        <li *ngFor = "let pet of pets">
          <a [routerLink]="['/register']" 
          [routerLinkActive]="['router-link-active']" 
          [routerLinkActiveOptions]="{ exact: true }">
          Pet
          <i class="fa fa-rocket"></i>
          </a>
        </li>
      </ul>
      <div class="nav-add-pet"><a href="#"> Add </a></div>
      <div class="nav-hospital"><a href="#"><img src="" alt="병원"></a></div>
      
    </nav>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  list: any;
  appUrl: string = 'http://wooltari-test-server-dev.ap-northeast-2.elasticbeanstalk.com/profile/2/pets/';
  pets: pet[];
  petCount: number;
  constructor (@Inject(HttpClient) private http: HttpClient){}


    ngOnInit() {
      this.getPetList();
    }

    getPetList() {
      this.http.get<list>(this.appUrl)
        .subscribe(list => {
          this.list = list;
          this.pets = this.list.pets;
          this.petCount = this.pets.length;
          console.log('[list]', list);
          console.log('[pet-list]', this.pets);
          console.log('[pet-count]', this.petCount);
        },
        err => console.log (err.status, err.url),
        () => console.log('Done'));
    }
}