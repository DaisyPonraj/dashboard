import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AddStationComponent } from 'app/modules/admin/pages/add-station/add-station.component';
import { AddStationService } from 'app/modules/admin/pages/add-station/add-station.service';

export default [
    {
        path     : '',
        component: AddStationComponent,
        resolve  : {
            data: () => inject(AddStationService).getData(),
        },
    },
] as Routes;
