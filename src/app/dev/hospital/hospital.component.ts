import { Component, OnInit } from '@angular/core';
// Marker Type
interface Marker {
  name: string;
  lat: number;
  lng: number;
  draggable?: boolean;
}

@Component({
  selector: 'app-root',
  template: `
  <div class="hospital-header">
    <h1>{{ title }}</h1>
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
  <div class="hospital-content">
  </div>
  `,
  styles : [`agm-map {height:300px;}
  .hospital-header{height:70px; width:98%; background:#FF5A5F; color:#fff;
  padding-left:2%; line-height:70px;
  }
  .hospital-map-container{padding-top:30px;}
  `]
})
export class HospitalComponent implements OnInit {
  title: string;
  // zoom level
  zoom: number;
  // start position
  lat: number;
  lng: number;
  markers: Marker[];
  ngOnInit() {
    this.title = '동물병원';
    this.zoom = 10;
    this.lat = 51.678418;
    this.lng = 7.809007;

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