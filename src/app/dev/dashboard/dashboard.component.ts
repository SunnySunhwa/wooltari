import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <sidebar></sidebar>
  <div class="container">
    <h1>Dashboard</h1>
    <div class="summary-view pet-profile">
      <div class="pet-profile-view">
        <button class="btn-edit-pet">edit</button>
        <p class="pet-info-img"><img src="" alt="동물사진(Pet Image)"></p>
        <div class="pet-info-details">
          <table>
            <tbody>
              <tr>
                <th scope="row">Breeds</th>
                <td>Cockers Spaniel</td>
                <th scope="row">Age</th>
                <td>11</td>
                <th scope="row">Neck size</th>
                <td>35cm</td>
              </tr>
              <tr>
                <th scope="row">Birth</th>
                <td>2007.03.10</td>
                <th scope="row">Human Age</th>
                <td>64</td>
                <th scope="row">Chest size</th>
                <td>65cm</td>
              </tr>
              <tr>
                <th scope="row">Number</th>
                <td>333332444002345</td>
                <th scope="row">Sex</th>
                <td>female</td>
                <th scope="row">Height</th>
                <td>80cm</td>
              </tr>
              <tr>
                <th scope="row">Color</th>
                <td>red</td>
                <th scope="row">Neutralization</th>
                <td>Yes</td>
                <th scope="row">Weight</th>
                <td>13kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="pet-profile-keywords">
        <ul>
          <li>Age<strong>11</strong></li>
          <li>Human Age<strong>63</strong></li>
          <li>Age<strong>11</strong></li>
          <li>red </li>
        </ul>
      </div>
    </div>

    <div class="summary-view pet-graph">
      <h2>Graph</h2>
    </div>

    <div class="summary-view pet-vaccination">
      <h2>Vaccination</h2>
    </div>

    <div class="summary-view">
      <h2>Medical Info</h2>
    </div>
  </div>
  <pre>{{ user | json}}</pre>

  
  `,
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

 constructor() { }

  ngOnInit() {
  }

}
