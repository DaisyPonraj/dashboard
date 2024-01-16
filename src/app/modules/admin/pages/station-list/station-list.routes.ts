import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {StationListComponent } from 'app/modules/admin/pages/station-list/station-list.component';
import { StationListService } from 'app/modules/admin/pages/station-list/station-list.service';

export default [
    {
        path     : '',
        component: StationListComponent,
        resolve  : {
            data: () => inject(StationListService).getData(),
        },
    },
] as Routes;
