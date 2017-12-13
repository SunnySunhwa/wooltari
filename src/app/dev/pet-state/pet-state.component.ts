import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-state',
  template: `
    <h1>Pet State</h1>
    
    <div class="flexbox">
      <ul class="flex-card-list">
        <!--### S: Card List ###-->
        <li class="flex-card-listitem">
          <div class="flex-card">
            현재 15kg, 목표 10kg
          </div>
          <div class="flex-card">
            Normal Weight
          </div>
        </li>
      </ul>
      <ul class="flex-card-list">
        <!--### S: Card List ###-->
        <li class="flex-card-listitem">
          <div class="flex-card">
            그래프
          </div>
        </li>
      </ul>
      <ul class="flex-card-list">
        <!--### S: Card List ###-->
        <li class="flex-card-listitem">
          <div class="flex-card">
            목 사이즈
          </div>
          <div class="flex-card">
            가슴 사이즈
          </div>
          <div class="flex-card">
            폼
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class PetStateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
