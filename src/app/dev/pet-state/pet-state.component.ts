import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-state',
  template: `
    <h1>Pet State</h1>

    <div class="flexbox">
      <ul class="flex-card-list">
        <!--### S: Card List ###-->
        <li class="flex-card-listitem top-section">
          <div class="flex-card">
            현재 15kg, 목표 10kg
            [pet nickname] needs to lose <span class="highlight">5kg</span> more!
          </div>
        </li>
        <li class="flex-card-listitem top-section">
          <div class="flex-card">
            Normal Weight
          </div>
        </li>
      </ul>
      <ul class="flex-card-list">
        <li class="flex-card-listitem mid-section">
          <div class="flex-card">
            그래프
          </div>
        </li>
      </ul>
      <ul class="flex-card-list">
        <li class="flex-card-listitem bottom-section">
          <div class="flex-card">
            목 사이즈
          </div>
        </li>
        <li class="flex-card-listitem bottom-section">
          <div class="flex-card">
            가슴 사이즈
          </div>
        </li>
        <li class="flex-card-listitem top-section">
          <form [formGroup]="stateForm" (ngSubmit)="signin()" novalidate>
            <div class="flex-card">
              <div class="form-container">
                <label class="elem-title">Current Weight</label>
                <div class="elem-conts">
                  <div class="input-current-weight">
                    <input type="text" name="currentweight" class="form-control" formControlName="currentWeight">
                  </div>
                </div>
              </div>
              <div class="form-container">
                <label class="elem-title">Goal Weight</label>
                <div class="elem-conts">
                  <div class="input-goal-weight">
                    <input type="text" name="goalweight" class="form-control" formControlName="goalWeight">
                  </div>
                </div>
              </div>
              <div class="form-container">
                <label class="elem-title">Neck Size</label>
                <div class="elem-conts">
                  <div class="input-neck-size">
                    <input type="text" name="necksize" class="form-control" formControlName="neckSize">
                  </div>
                </div>
              </div>
              <div class="form-container">
                <label class="elem-title">Chest Size</label>
                <div class="elem-conts">
                  <div class="input-chest-size">
                    <input type="text" name="chestsize" class="form-control" formControlName="chestSize">
                  </div>
                </div>
                <div class="row box-footer">
                  <div class="btn-set-wrapper">
                    <button type="submit" class="btn btn-type1 bg-orange" [disabled]="stateForm.invalid">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./pet-state.scss']
})
export class PetStateComponent implements OnInit {
  stateForm: FormGroup;
  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.stateForm = this.fb.group({
      currentWeight: ['', Validators.required],
      goalWeight: ['', Validators.required],
      neckSize: ['', Validators.required],
      chestSize: ['', Validators.required]
    });
  }

}
