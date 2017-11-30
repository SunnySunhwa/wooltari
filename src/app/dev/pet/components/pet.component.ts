import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  template: `
    <app-pet-register></app-pet-register>
  `,
  styles: []
})
export class PetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
