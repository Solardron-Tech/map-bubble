import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj.js';
import { defaults as defaultControls } from 'ol/control.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: Map;
  private currentURL = 'httP://localhost:4200';

  constructor() {}

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-4, 40]),
        zoom: 7,
      }),
      controls: defaultControls({ attribution: false }),
    });

    this.addClick();
  }

  private addClick(): void {
    this.map.on('click', (event) => {
      const nextURL = this.currentURL + '/var';
      const nextTitle = 'My new page title';
      const nextState = { additionalInformation: 'Updated the URL with JS' };
      window.history.pushState(nextState, nextTitle, nextURL);
    });
  }
}
