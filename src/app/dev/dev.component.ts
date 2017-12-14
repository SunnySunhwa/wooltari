import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  template: `
  <h1>404 Error Pages.</h1>
  <h2>Dear friend, this URL was not found!</h2>
  `,
  styles: []
})
export class DevComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
