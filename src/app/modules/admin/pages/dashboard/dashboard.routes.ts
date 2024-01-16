import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/modules/admin/pages/dashboard/dashboard.component';
import { DashboardService } from 'app/modules/admin/pages/dashboard/dashboard.service';

export default [
    {
        path     : '',
        component: DashboardComponent,
        resolve  : {
            data: () => inject(DashboardService).getData(),
        },
    },
] as Routes;
