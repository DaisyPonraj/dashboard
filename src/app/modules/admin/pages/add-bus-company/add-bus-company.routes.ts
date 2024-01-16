import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AddBusCompanyComponent } from 'app/modules/admin/pages/add-bus-company/add-bus-company.component';
import { AddBusCompanyService } from 'app/modules/admin/pages/add-bus-company/add-bus-company.service';

export default [
    {
        path     : '',
        component: AddBusCompanyComponent,
        resolve  : {
            data: () => inject(AddBusCompanyService).getData(),
        },
    },
] as Routes;
