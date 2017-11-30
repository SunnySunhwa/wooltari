import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-register',
  template: `
  <h1>Pet register</h1>
<div class="container">
    <h2> pet name</h2>
    <div class="row">
        <div class="thumb">
            <div> Thumb img </div>
            <input type="text" placeholder="Write your pet's name" /><i>icon</i>
        </div>
        <div class="box-container">
            <div class="box-left">
                <div class="left-elem">
                    <h4 class="elem-title">Species</h4>
                    <div class="elem-conts">
                        <div class="input-group">
                            <input type="radio" name="species" value="cat" id="species-cat" />
                            <label for="species-cat">Cat</label>
                            <input type="radio" name="species" value="dog" id="species-dog" />
                            <label for="species-dog">Dog</label>
                        </div>
                    </div>
                </div>
                <!--// left-elem1-->
                <div class="left-elem">
                    <h4 class="elem-title">Breeds</h4>
                    <div class="elem-conts">
                        <div class="input-group">
                            <select aria-placeholder="Select your pet's breeds">
                                  <option>Affenpinscher</option>
                                  <option>Afghan Hound</option>
                                  <option>Airedale Terrier</option>
                                  <option>Others</option>
                                </select>
                        </div>
                    </div>
                    <div class="left-elem">
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
                        <div class="left-elem">
                            <h4 class="elem-title">Number</h4>
                            <div class="elem-conts">
                                <input type="text" placeholder="registration number">
                                <button>search</button>
                            </div>
                        </div>
                    </div>
                    <!-- //box-left-->
                    <div class="box-right">
                        <div class="right-elem">
                            <h4 class="elem-title">Age</h4>
                            <div class="elem-conts">
                                <span>Logic Output</span>
                            </div>
                            <h4 class="elem-title">Human Age</h4>
                            <div class="elem-conts">
                                <span>Logic Output</span>
                            </div>
                        </div>
                        <div class="right-elem">
                            <h4 class="elem-title">Sex</h4>
                            <div class="elem-conts">
                                <div class="input-group">
                                    <input type="radio" name="sex" value="male" id="sex-male" />
                                    <label for="sex-male">Male</label>
                                    <input type="radio" name="sex" value="female" id="sex-female" />
                                    <label for="sex-female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div class="right-elem">
                            <h4 class="elem-title">Neutralization</h4>
                            <div class="elem-conts">
                                <div class="input-group">
                                    <input type="radio" name="neutralization" value="male" id="neutralization-male" />
                                    <label for="neutralization-yes">Yes</label>
                                    <input type="radio" name="neutralization" value="female" id="neutralization-female" />
                                    <label for="neutralization-no">No</label>
                                </div>
                            </div>
                        </div>
                        <div class="right-elem">
                            <h4 class="elem-title">Color</h4>
                            <div class="elem-conts">
                                <div class="input-group">
                                    <fieldset>
                                        <ul class="color-chips">
                                            <li class="default">
                                                <input type="radio" class="radio__colorchip" name="widget" id="color-default" value="default">
                                                <label for="color-default"><span>c</span></label>
                                            </li>
                                            <li class="orange">
                                                <input type="radio" class="radio__colorchip" name="widget" id="color-orange" value="orange">
                                                <label for="color-orange"><span>o</span></label>
                                            </li>
                                            <li class="tealpale">
                                                <input type="radio" class="radio__colorchip" name="widget" id="color-tealpale" value="tealpale">
                                                <label for="color-tealpale"><span>l</span></label>
                                            </li>
                                            <li class="teal">
                                                <input type="radio" class="radio__colorchip" name="widget" id="color-teal" value="teal">
                                                <label for="color-teal"><span>o</span></label>
                                            </li>
                                            <li class="tealdark">
                                                <input type="radio" class="radio__colorchip" name="widget" id="color-tealdark" value="tealdark">
                                                <label for="color-tealdark"><span>r</span></label>
                                            </li>
                                        </ul>
                                    </fieldset>
                                    <p id="selected"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,
  styles: []
})
export class PetRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
