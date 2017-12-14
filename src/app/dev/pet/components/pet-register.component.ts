import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { list, pet } from '../../shared/pet';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-pet-register',
  template: `
  <h1>Pet register</h1>
<div class="container">
<div class="row profile">
  <h2> pet name</h2>
    <div class="thumb">
      <div> Thumb img </div>
      <input type="text" [(ngModel)]="petName" placeholder="Write your pet's name" />
      <i class="icon-edit">icon</i>
    </div>
  </div>
  <div class="row box-container">
      <div class="box-left">
        <div class="elem">
          <h4 class="elem-title">Species</h4>
          <div class="elem-conts">
            <form [formGroup]="radioGroupForm">
              <div class="btn-group" ngbRadioGroup name="radioBasic" formControlName="species">
                <label ngbButtonLabel class="btn-primary">
                  <input ngbButton type="radio" value="cat">cat
                </label>
                <label ngbButtonLabel class="btn-primary">
                  <input ngbButton type="radio" value="dog">dog
                </label>
              </div>
            </form>
            <hr>
            <pre>{{radioGroupForm.value['species']}}</pre>
          </div>
        </div><!-- // elem1-->
        <div class="elem">
          <h4 class="elem-title">Breeds</h4>
          <div class="elem-conts">
             <div class="input-group">
              <select *ngIf="" class="selectpicker" aria-placeholder="Select your pet's breeds">
                <option *ngFor="">Affenpinscher</option>
              </select>
            </div>
          </div>
        </div><!-- //elem2 -->
        <div class="elem">
          <h4 class="elem-title">Birth</h4>
          <div class="elem-conts">
            <form class="form-inline">
              <div class="form-group">
                <div class="input-group">
                  <input class="form-control" placeholder="yyyy-mm-dd"
                         name="dp" [(ngModel)]="datePicker" ngbDatepicker #d="ngbDatepicker">
                  <button class="input-group-addon" (click)="d.toggle()" type="button">
                    <i fa [name]="'calendar'" ></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div><!-- // elem3 -->
        <div class="elem">
            <h4 class="elem-title">Number</h4>
            <div class="elem-conts">
              <input type="text" placeholder="registration number">
              <button type="button" class="btn btn-small btn-radius btn-mint">search</button>
            </div>
        </div> <!-- // elem4 -->
      </div><!-- // box-left-->
      <div class="box-right">
        <div class="elem right-elem">
          <h4 class="elem-title">Age</h4>
          <div class="elem-conts">
              <span>11</span>
          </div>
          <h4 class="elem-title">Human Age</h4>
          <div class="elem-conts">
              <span>63</span>
          </div>
        </div><!-- // elem1 -->
        <div class="elem">
          <h4 class="elem-title">Sex</h4>
          <div class="elem-conts">
            <div class="input-group">
                <input type="radio" name="sex" value="male" checked/>
                <label for="sex-male">Male</label>
                <input type="radio" name="sex" value="female" />
                <label for="sex-female">Female</label>
            </div>
          </div>
        </div> <!-- //elem2 -->
        <div class="elem">
            <h4 class="elem-title">Neutralization</h4>
            <div class="elem-conts">
                <div class="input-group">
                    <input type="radio" name="neutralization" checked />
                    <label for="neutralization-yes">Yes</label>
                    <input type="radio" name="neutralization" />
                    <label for="neutralization-no">No</label>
                </div>
            </div>
        </div> <!-- //elem3 -->
        <div class="elem">
          <h4 class="elem-title">Color</h4>
            <div class="elem-conts">
                <div class="input-group">
                  <fieldset>
                      <ul class="color-chips gradationA">
                          <li class="color-chip gradationA-1 default">
                              <input type="radio" class="radio-colorchip" name="widget">
                              <label for="gradation-A-1"></label>
                          </li>
                          <li class="color-chip gradationA-2">
                              <input type="radio" class="radio-colorchip" name="widget">
                              <label for="gradation-A-2"></label>
                          </li>
                          <li class="color-chip gradationA-3">
                              <input type="radio" class="radio-colorchip" name="widget">
                              <label for="gradation-A-3"></label>
                          </li>
                          <li class="color-chip gradationA-4">
                              <input type="radio" class="radio-colorchip" name="widget">
                              <label for="gradation-A-4"></label>
                          </li>
                          <li class="color-chip gradationA-5">
                              <input type="radio" class="radio-colorchip" name="widget">
                              <label for="gradation-A-5"></label>
                          </li>
                      </ul>
                  </fieldset>
                  <p id="selected"></p>
                </div><!-- //input-group-->
              </div> <!-- //elem-conts-->
        </div> <!-- //elem4 -->
      </div><!-- //box-right -->
  </div> <!--// box-container-->
  <div class="row box-footer">
    <div class="btn-set-wrapper">
      <button type="button" class="btn btn-radius btn-footer btn-orange" (onClick)="addPet()">Submit</button>
      <button type="button" class="btn btn-radius btn-footer btn-grey4">Cancel</button>
    </div>
  </div> <!-- // box-footer -->
  <hr/>
          <pre>DatePicker Model: {{ datePicker | json }}</pre>
</div><!-- // container-->`,
  styleUrls: ['../pet-style.scss']
})
export class PetRegisterComponent implements OnInit {
  public radioGroupForm: FormGroup;
  list: any;
  appUrl: string = 'http://wooltari-test-server-dev.ap-northeast-2.elasticbeanstalk.com/profile/2/pets/';
  pets: any;
  petName: string;
  datePicker;


  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(HttpClient) private http: HttpClient
) { }


  ngOnInit() {
    this.getPetList();
    this.radioGroupForm = this.formBuilder.group({
      'species': 'cat'
    });
  }

  getPetList() {
    this.http.get<list>(this.appUrl)
      .subscribe(list => {
        this.list = list;
        this.pets = this.list.pets;
        console.log('[list]', list);
        console.log('[pet-list]', this.pets);
      },
      err => console.log(err.status, err.url),
      () => console.log('Done'));
  }

  addPet(content: string) {
    const newPet = { pk: this.lastPetPk(), name: this.petName};

    this.http.post(this.appUrl, newPet)
      .subscribe(() => this.pets = [newPet, ...this.pets]);
  }

  lastPetPk(): number {
    return this.pets.length ? Math.max(...this.pets.map(({ pk }) => pk )) + 1 : 1;
  }
}
