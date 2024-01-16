import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AddRouteComponent } from 'app/modules/admin/pages/add-route/add-route.component';
import { AddRouteService } from 'app/modules/admin/pages/add-route/add-route.service';

export default [
    {
        path     : '',
        component: AddRouteComponent,
        resolve  : {
            data: () => inject(AddRouteService).getData(),
        },
    },
] as Routes;
