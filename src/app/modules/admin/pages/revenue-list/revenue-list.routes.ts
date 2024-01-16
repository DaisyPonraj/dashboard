import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {RevenueListComponent } from 'app/modules/admin/pages/revenue-list/revenue-list.component';
import { RevenueListService } from 'app/modules/admin/pages/revenue-list/revenue-list.service';

export default [
    {
        path     : '',
        component: RevenueListComponent,
        resolve  : {
            data: () => inject(RevenueListService).getData(),
        },
    },
] as Routes;
