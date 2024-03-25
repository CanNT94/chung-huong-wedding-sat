import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  optionsGroom: google.maps.MapOptions = {
    center: {lat: 20.805772754183103, lng: 105.88610436606899},
    zoom: 17
  };
  constructor() {
  }

  ngOnInit(): void {
  }

}
