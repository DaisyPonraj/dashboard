import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AddBusComponent } from 'app/modules/admin/pages/add-bus/add-bus.component';
import { AddBusService } from 'app/modules/admin/pages/add-bus/add-bus.service';

export default [
    {
        path     : '',
        component: AddBusComponent,
        resolve  : {
            data: () => inject(AddBusService).getData(),
        },
    },
] as Routes;
