import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { AddStationService } from 'app/modules/admin/pages/add-station/add-station.service';
import { MatRippleModule } from '@angular/material/core';
import {GoogleMapsModule} from '@angular/google-maps'

@Component({
  selector: 'add-station',
  templateUrl: './add-station.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe,MatFormFieldModule, MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    GoogleMapsModule
  ]
})
export class AddStationComponent implements OnInit {
  data: any;
  constructor(
    private _addStationService: AddStationService,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          // Map configuration
          const mapOptions = {
            center: currentLatLng,
            zoom: 15,
          };

          // Create the map
          const map = new google.maps.Map(document.getElementById('map'), mapOptions);

          // Create a marker at the user's current location
          const marker = new google.maps.Marker({
            position: currentLatLng,
            map: map,
            title: 'Your Location',
            draggable: true,
          });

          // Update marker position when dragged
          google.maps.event.addListener(marker, 'dragend', (event) => {
            const newLatLng = marker.getPosition();
            console.log('Marker Position:', newLatLng.lat(), newLatLng.lng());

            // Calculate and display route
            this.calculateAndDisplayRoute(currentLatLng, newLatLng, map);
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  calculateAndDisplayRoute(origin: any, destination: any, map: any): void {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response: any, status: any) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);

          // Extract and log route latitudes and longitudes
          const route = response.routes[0].legs[0];
          const routeCoordinates = route.steps.map((step: any) => step.path);

          console.log('Route Coordinates:', routeCoordinates);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      }
    );
  }


}
