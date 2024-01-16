import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {RouteListComponent } from 'app/modules/admin/pages/route-list/route-list.component';
import { RouteListService } from 'app/modules/admin/pages/route-list/route-list.service';

export default [
    {
        path     : '',
        component: RouteListComponent,
        resolve  : {
            data: () => inject(RouteListService).getData(),
        },
    },
] as Routes;
