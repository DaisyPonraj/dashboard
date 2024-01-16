import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { TripListComponent } from './trip-list.component';
import { TripListService } from './trip-list.service';

export default [
    {
        path     : '',
        component: TripListComponent,
        resolve  : {
            data: () => inject(TripListService).getData(),
        },
    },
] as Routes;
