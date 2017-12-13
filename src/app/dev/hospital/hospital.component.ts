import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Marker Type
interface Marker {
  name: string;
  lat: number;
  lng: number;
  draggable?: boolean;
}

/*login test */
class Login {
  constructor(
    public pk: any,
    public user_type: any,
    public email: any,
    public nickname: any,
    public is_active: any,
    public date_joined: any
  ) {}
}

@Component({
  selector: 'app-root',
  template: `
 <div class="hospital-header">
    <h2>{{ title }}</h2>
 </div>
  <div class="hospital-map-container">
    <agm-map
            [latitude]="lat"
            [longitude]="lng"
            [zoom]="zoom"
            [disableDefaultUI]="false"
            [zoomControl]="false"
    >
    <!-- [iconUrl]="'../assets/airbnb.png'"-->
      <agm-marker
            *ngFor="let m of markers; let i = index"
            [latitude]="m.lat"
            [longitude]="m.lng"
            [markerDraggable]="m.draggable"
           >
          <agm-info-window
               [isOpen]="true">
              <strong>{{m.name}}</strong>
          </agm-info-window>
      </agm-marker>
    </agm-map>
  </div>
  <!--card list-->
  <div class="flexbox">
    <h2 class="tit"><i class="icon-thumbs-up-alt"></i>24시 동물병원</h2>
    <!-- card list -->
    <ul class="flex-card-list">
      <!-- card list item -->
      <li class="flex-card-listitem" *ngFor="let cardList of cardLists">
        <!-- card module -->
        <div class="flex-card">
          <!-- image container -->
          <div class="flex-card-image">
            <img [src]="cardList.img" alt="img"/>
          </div>
          <!-- content container -->
          <div class="flex-card-content">
            <h3 class="flex-card-heading">{{cardList.title}}</h3>
            <p class="tel"><i class="icon-phone"></i>{{cardList.tel}}</p>
            <p class="address">{{cardList.address}}</p>
            <!--flex-card-button-->
          </div>
        </div>
      </li>
      <!-- card list item -->
    </ul>
  </div>
  <!--card list-->
  <div class="flexbox near-hospital">
    <h2 class="tit">내 주변 병원</h2>
    <!-- card list -->
    <ul class="flex-card-list">
      <!-- card list item -->
      <li class="flex-card-listitem" *ngFor="let cardList of cardLists">
        <!-- card module -->
        <div class="flex-card">
          <!-- image container -->
          <div class="flex-card-image">
            <img [src]="cardList.img" alt="img"/>
          </div>
          <!-- content container -->
          <div class="flex-card-content">
            <h3 class="flex-card-heading cursor"><i class="icon-plus-sign"></i>{{cardList.title}}</h3>
            <p class="tel"><i class="icon-phone"></i>{{cardList.tel}}</p>
            <p class="address">{{cardList.address}}</p>
            <!--flex-card-button-->
          </div>
        </div>
      </li>
      <!-- card list item -->
    </ul>
  </div>
  `,
  styleUrls: ['./hospital.component.scss']
})


export class HospitalComponent implements OnInit {
  url = 'https://wootari-test-server-dev.ap-northeast-2.elasticbeanstalk.com/profile';
  login: Login[];
  title: string;
  // zoom level
  zoom: number;
  // start position
  lat: number;
  lng: number;
  markers: Marker[];

  cardLists: any[];
  constructor(@Inject(HttpClient) public http: HttpClient) {}
  ngOnInit() {

    this.title = '동물병원 지도';
    this.zoom = 10;
    this.lat = 51.678418;
    this.lng = 7.809007;

    this.cardLists = [
      {
        title: '튼튼동물병원',
        img: '../../../assets/img/img1.jpg',
        tel: '02-2063-9859',
        address: '서울시 강남구 신사동'
      },
      {
        title: '튼튼동물병원',
        img: '../../../assets/img/img1.jpg',
        tel: '02-2063-9859',
        address: '서울시 강남구 신사동'
      },
      {
        title: '튼튼동물병원',
        img: '../../../assets/img/img1.jpg',
        tel: '02-2063-9859',
        address: '서울시 강남구 신사동'
      },
      {
        title: '튼튼동물병원',
        img: '../../../assets/img/img1.jpg',
        tel: '02-2063-9859',
        address: '서울시 강남구 신사동'
      }
    ];

    this.markers = [
      {
        name: '동물병원1',
        lat: 51.678418,
        lng: 7.929007,
      },
      {
        name: '동물병원2',
        lat: 51.678418,
        lng: 7.759007,
      },
      {
        name: '동물병원3',
        lat: 51.678418,
        lng: 7.349007,
      }
    ];
  }
  // Markers
  /* clickedMarker(marker, index:number) {
    console.log(`clicked Marker:
    ${marker.name} at index ${index}`)
  }
  */
  /*
     clickedMarker(marker: marker, index:number) {
    console.log(`clicked Marker:
    ${marker.name} at index ${index}`)
  }
  */

  /* mapClicked($event: any){
    console.log('map clicked');
    const newMarker = {
      name: 'untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    };
    this.markers.push(newMarker);
    console.log(this.markers);
  }*/

  /* markerDragEnd(marker: any, $event: any) {
    console.log('dragEnd', marker, $event);

    const updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }
    const newLat = $event.coords.lat;
    const newLng = $event.coords.lng;
  }*/
  // https://stackoverflow.com/questions/32062849/modify-my-custom-marker-image-size-for-my-google-map
  // https://github.com/angular-ui/angular-google-maps/issues/436#event-124520459
  // https://github.com/SebastianM/angular-google-maps/issues/517
}

/*
app.get('/', (req, res) => res.json('Hello World!'));

app.get('/todos', (req, res) => {
  console.log('---------------------------------');
  console.log('GET /todos');
  console.log('---------------------------------');

  const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Angular', completed: false }
  ];
  res.json({ todos });
});

app.post('/todos', (req, res) => {
  console.log('---------------------------------');
  console.log('POST /todos');
  console.log('[PAYLOAD]', req.body);
  console.log('---------------------------------');

  res.json({ result: true });
});

app.patch('/todos/id/:id', (req, res) => {
  console.log('---------------------------------');
  console.log('PATCH /todos/id/:id');
  console.log('[REQUEST PARAMS]', req.params);
  console.log('[PAYLOAD]', req.body);
  console.log('---------------------------------');

  res.json({ result: false, message: '해당 todo가 없습니다' });
});

app.delete('/todos/id/:id', (req, res) => {
  console.log('---------------------------------');
  console.log('DELETE /todos/id/:id');
  console.log('[REQUEST PARAMS]', req.params);
  console.log('---------------------------------');

  res.json({ result: true });
});

 */
