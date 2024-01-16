import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {BusListComponent } from 'app/modules/admin/pages/bus-list/bus-list.component';
import { BusListService } from 'app/modules/admin/pages/bus-list/bus-list.service';

export default [
    {
        path     : '',
        component: BusListComponent,
        resolve  : {
            data: () => inject(BusListService).getData(),
        },
    },
] as Routes;
