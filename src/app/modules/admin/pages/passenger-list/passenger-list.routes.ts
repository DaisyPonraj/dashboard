import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {PassengerListComponent } from 'app/modules/admin/pages/passenger-list/passenger-list.component';
import { PassengerListService } from 'app/modules/admin/pages/passenger-list/passenger-list.service';

export default [
    {
        path     : '',
        component: PassengerListComponent,
        resolve  : {
            data: () => inject(PassengerListService).getData(),
        },
    },
] as Routes;
