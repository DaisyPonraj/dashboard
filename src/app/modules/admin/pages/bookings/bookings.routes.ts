import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {BookingListComponent } from 'app/modules/admin/pages/bookings/bookings.component';
import { BookingListService } from 'app/modules/admin/pages/bookings/bookings.service';

export default [
    {
        path     : '',
        component: BookingListComponent,
        resolve  : {
            data: () => inject(BookingListService).getData(),
        },
    },
] as Routes;
