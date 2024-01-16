import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { BusCompanyListComponent } from 'app/modules/admin/pages/bus-company-list/bus-company-list.component';
import { BusCompanyListService } from 'app/modules/admin/pages/bus-company-list/bus-company-list.service';

export default [
    {
        path: '',
        component: BusCompanyListComponent,
        resolve: {
            data: () => inject(BusCompanyListService).getData(),
        },
    },
] as Routes;
