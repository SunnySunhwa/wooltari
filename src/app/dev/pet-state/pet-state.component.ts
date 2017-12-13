import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-state',
  template: `
    <h1>Pet State</h1>
      <div class="container">
        <div class="row">
          <div class="">현재 15kg, 목표 10kg</div>
          <div class="">Normal Weight</div>
        </div>
        <div class="row">
          <div class="">그래프</div>
        </div>
        <div class="row">
          <div class="">넥 사이즈</div>
          <div class="">가슴 사이즈</div>
          <div class="">인풋상자</div>
        </div>
      </div>
  `,
  styles: []
})
export class PetStateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
