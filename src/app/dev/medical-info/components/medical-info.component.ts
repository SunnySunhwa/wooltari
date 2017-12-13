import { Component } from '@angular/core';


@Component({
  selector: 'app-medical-info',
  template: `  

  <div class="container">
  
    <h1>Medical Info</h1>

    <div class="flexbox">
      <ul class="flex-card-list">
        <!--### S: Card List ###-->
        <li class="flex-card-listitem">
          <div class="flex-card">
            <!-- Card image -->
            <div class="flex-card-image">
              <img src="../../assets/img/medical1.jpg" alt="" width="203" height="130">
            </div>
            <!-- Card Content -->
            <div class="flex-card-content">
              <ul class="list-in-card flex-medical-list">
                <li>
                  <strong class="list-title">Date: </strong>
                  <span class="list-content">2017.12.06</span>
                 </li>
                 <li>
                  <strong class="list-title">Description: </strong>
                  <div class="list-content">중성화수술</div>
                 </li>
                 <li>
                  <strong class="list-title">Comment: </strong>
                  <div class="list-content overflow-scroll">수술은 성공적으로 끝났다!!<br>
                  끄르르르끄르<br>
                  길땐<br>
                  이렇게<br>
                  되여~</div>
                 </li>
              </ul>
              <div class="btns-in-card">
                <button type="button" class="btn btn-radius btn-outline-mint btn-type1-mint">Edit</button>
                <button type="button" class="btn btn-radius btn-mint">Delete</button>
              </div>
            </div>
          </div>
        </li>
        <!--### E: Card List ###-->
        <!--### S: Card List ###-->
        <li class="flex-card-listitem">
          <div class="flex-card">
            <!-- Card image -->
            <div class="flex-card-image">
              <img src="../../assets/img/medical1.jpg" alt="" width="203" height="130">
            </div>
            <!-- Card Content -->
            <div class="flex-card-content">
              <ul class="list-in-card flex-medical-list">
                <li>
                  <strong class="list-title">Date: </strong>
                  <span class="list-content">2017.12.06</span>
                 </li>
                 <li>
                  <strong class="list-title">Description: </strong>
                  <div class="list-content">중성화수술</div>
                 </li>
                 <li>
                  <strong class="list-title">Comment: </strong>
                  <div class="list-content overflow-scroll">수술은 성공적으로 끝났다!!<br>
                  끄르르르끄르<br>
                  길땐<br>
                  이렇게<br>
                  되여~</div>
                 </li>
              </ul>
              <div class="btns-in-card">
                <button type="button" class="btn btn-radius btn-outline-mint btn-type1-mint">Edit</button>
                <button type="button" class="btn btn-radius btn-mint">Delete</button>
              </div>
            </div>
          </div>
        </li>
        <!--### E: Card List ###-->

        <!--S: Enroll Card List -->
        <li class="flex-card-listitem add-listitem">
          <div class="flex-card">
            <p class="new-card-guide">
              <button class="icon-new-add"><img src="../../../../assets/img/plus-circular-icon.png" alt=""></button>
              <span class="text-new-add">Add New Medical Info</span>  
            </p>
          </div>
        </li>

        <!-- button : (click)="htmlInsideModal.open()"-->
        <!--E: Enroll Card List -->
        
      </ul>
    </div>

    <!--s: Modal Popup ; 
    <modal #htmlInsideModal class="modal-wrap">
      <ng-template #modalHeader>
       Medical Info Add
      </ng-template>
      <ng-template #modalBody>
        <medical-info-view></medical-info-view>
      </ng-template>
    </modal>
    e: Modal Popup-->
  </div>
  `,
  styleUrls: ['./medical-info.scss']
})
export class MedicalInfoComponent {


}
