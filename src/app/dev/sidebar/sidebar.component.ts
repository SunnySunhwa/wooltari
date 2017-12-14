import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { list, pet } from '../shared/pet';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-sidebar',
  template: `
  <nav>
      <div class="menu nav-user" [ngClass]="{sidebarPushRight: isActive}">
        <a [routerLink]= "['/membership']" 
        [routerLinkActive]= "['router-link-active']" 
        [routerLinkActiveOptions]="{ exact: true }">
        <i fa [name]="'user-circle-o'" [size]="iconSize" ></i>
        user
        </a>
      </div>
      <ul class="menu nav-pet-list">
        <li *ngFor = "let pet of pets">
          <a [routerLink]="['/dashboard']" 
          [routerLinkActive]="['router-link-active']" 
          [routerLinkActiveOptions]="{ exact: true }">
          <!--<a [routerLink]="['/product', 1234]">Product Details</a> -->
          <i fa [name]="'paw'" [size]="iconSize" ></i>
          {{pet.name}}
          </a>
        </li>
      </ul>
      <div class="menu nav-add-pet">
        <a [routerLink]="['/register']"><i fa [name]="'plus-circle'" [size]="iconSize" ></i>Add</a>
        </div>
      <div class="menu nav-hospital">
        <a [routerLink]="['/hospital']"><i fa [name]="'hospital-o'" [size]="iconSize" ></i>병원</a></div>
      
    </nav>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  iconSize: number = 1;
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