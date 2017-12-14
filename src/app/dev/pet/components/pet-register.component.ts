import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pet-register',
  template: `
  <h1>Pet register</h1>
<div class="container">
<div class="row profile">
  <h2> pet name</h2>
    <div class="thumb">
      <div> Thumb img </div>
      <input type="text" placeholder="Write your pet's name" />
      <i class="icon-edit">icon</i>
    </div>
  </div>
  <div class="row box-container">
      <div class="box-left">
        <div class="elem">
          <h4 class="elem-title">Species</h4>
          <div class="elem-conts">
            <div class="radio-group species">
              <input type="radio" id="option-one" name="selector" checked><label for="option-one" >Cat</label>
              <input type="radio" id="option-two" name="selector"><label for="option-two">Dog</label>
            </div>
          </div>
        </div><!-- // elem1-->
        <div class="elem">
          <h4 class="elem-title">Breeds</h4>
          <div class="elem-conts">
             <div class="input-group">
              <select class="selectpicker" aria-placeholder="Select your pet's breeds">
                <option>Affenpinscher</option>
                <option>Afghan Hound</option>
                <option>Airedale Terrier</option>
                <option>Others</option>
              </select>
            </div>
          </div>
        </div><!-- //elem2 -->
        <div class="elem">
          <h4 class="elem-title">Birth</h4>
          <div class="elem-conts">
            <div class="input-group">
              <select>
                <option>YYYY</option>
              </select>
              <select>
                <option>MM</option>
              </select>
              <select>
                <option>DD</option>
              </select>
            </div>
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
      <button type="button" class="btn btn-radius btn-footer btn-orange">Submit</button>
      <button type="button" class="btn btn-radius btn-footer btn-grey4">Cancel</button>
    </div>
  </div> <!-- // box-footer -->
</div><!-- // container-->`,
  styleUrls: ['./pet-style.scss']
})
export class PetRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
