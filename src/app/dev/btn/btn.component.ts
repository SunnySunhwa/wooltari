import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  template: `
<h1> 버튼형식 샘플링</h1>
<div class="container">
  <div class="btn-sample bg-white">
      <h2>버튼 타입</h2>
      <span>btn-type1</span><button class="btn btn-type1 bg-green">Cancel</button>
      <span>btn-type2</span><button class="btn btn-type2 line-orange">Cancel</button>
      <span>btn-type2</span><button class="btn btn-type2 line-green">Cancel</button>
      </div>
      <div class="btn-sample bg-orange">
      <span>btn-type3</span><button class="btn btn-type3 bg-orange">Submit</button>
      </div>
      <div class="btn-sample bg-color">
      <span>btn-type4</span><button class="btn btn-type4 line-black">Cancel</button>
      <span>btn-type4</span><button class="btn btn-type4 line-green">Submit</button>
  </div>
  <div class="btn-sample bg-white">
    <h2>라디오 타입</h2>
    <div class="toggle-radio">
      <input type="radio" name="rdo" id="yes" checked>
      <input type="radio" name="rdo" id="no">
      <div class="switch">
        <label for="yes">Yes</label>
        <label for="no">No</label>
        <span class="bar"></span>
      </div>
    </div>
    <div class="check-radio">
      <ul class="list">
        <li class="list-item">
         <input type="radio" class="radio-btn" name="choice" id="species-cat" checked/>
         <label for="species-cat" class="label">Cat</label>
        </li>
        <li class="list-item">
         <input type="radio" class="radio-btn" name="choice" id="species-dog" />
         <label for="species-dog" class="label">Dog</label>
        </li>
      </ul>
    </div><!-- //check-radio -->
  </div>
  <div class="btn-sample bg-orange">
    <h2>셀렉트 박스</h2>
    <div class="select1">
      <label>
          <input type="checkbox" name="placeholder">
          <i class="toggle icon icon-plus">+</i>
          <i class="toggle icon icon-minus">-</i>
          <span class="placeholder">select</span>
          <label class="option">
              <input type="radio" name="option">
              <span class="title">Select Option1</span>
          </label>
  
          <label class="option">
            <input type="radio" name="option">
            <span class="title">Select Option2</span>
          </label>
          <label class="option">
            <input type="radio" name="option">
            <span class="title">Select Option3</span>
          </label>
          <label class="option">
            <input type="radio" name="option">
            <span class="title">Select Option4</span>
          </label>
      </label>
    </div> <!--// select -->
  </div>
  <div class="btn-sample bg-white">
    <h2>셀렉트 박스2</h2>
    <div class="select2">
      <label>
          <input type="checkbox" name="placeholder">
          <i class="toggle icon icon-plus">+</i>
          <i class="toggle icon icon-minus">-</i>
          <span class="placeholder">select</span>
          <label class="option">
              <input type="radio" name="option">
              <span class="title">Select Option1</span>
          </label>
  
          <label class="option">
            <input type="radio" name="option">
            <span class="title">Select Option2</span>
          </label>
          <label class="option">
            <input type="radio" name="option">
            <span class="title">Select Option3</span>
          </label>
          <label class="option">
            <input type="radio" name="option">
            <span class="title">Select Option4</span>
          </label>
      </label>
    </div> <!--// select -->
  </div>

</div><!-- //container -->
  `,
  styles: []
})
export class BtnComponent {


}
