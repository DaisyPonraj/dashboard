import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AddPassengerComponent } from 'app/modules/admin/pages/add-passenger/add-passenger.component';
import { AddPassengerService } from 'app/modules/admin/pages/add-passenger/add-passenger.service';

export default [
    {
        path     : '',
        component: AddPassengerComponent,
        resolve  : {
            data: () => inject(AddPassengerService).getData(),
        },
    },
] as Routes;
