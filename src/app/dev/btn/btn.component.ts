import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  template: `
<h1> 버튼형식 샘플링 </h1>
<div class="container">
  <div class="btn-sample bg-white">
    <a href="https://getbootstrap.com/docs/4.0/components/alerts/">go to Documents</a>
    <p>Button Basic</p>
    <button type="button" class="btn btn-radius btn-mint">mint</button>
    <button type="button" class="btn btn-radius btn-orange">orange</button>
    <p>Button Type1</p>
    <button type="button" class="btn btn-radius btn-outline-mint btn-type1-mint">mint</button>
    <button type="button" class="btn btn-radius btn-outline-orange btn-type1-orange">orange</button>
  </div>
  <div class="btn-sample bg-orange">
    <p>Button Type2</p>
    <button type="button" class="btn btn-radius btn-outline-orange btn-type2-orange">orange</button>
  </div>
  <div class="btn-sample bg-white">
    <p>Select Box</p>
    <div class="btn-group">
      <button class="btn btn-mint btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Drop menu
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Select Option 1</a>
        <a class="dropdown-item" href="#">Select Option 2</a>
        <a class="dropdown-item" href="#">Select Option 3</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">after Divider</a>
      </div>
    </div>
    <p>Radio Basic</p>
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="radio" name="options" id="option1" autocomplete="off" checked> Cat
      </label>
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option2" autocomplete="off"> Dog
      </label>
    </div>
    <p>Radio type1</p>
    <div class="radio-group">
      <input type="radio" id="option-one" name="selector" checked><label for="option-one" >Yes</label>
      <input type="radio" id="option-two" name="selector"><label for="option-two">No</label>
    </div>
    
  </div>

</div><!-- //container -->
  `,
  styles: []
})
export class BtnComponent {


}
