import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {StaffListComponent } from 'app/modules/admin/pages/staff-list/staff-list.component';
import { StaffListService } from 'app/modules/admin/pages/staff-list/staff-list.service';

export default [
    {
        path     : '',
        component: StaffListComponent,
        resolve  : {
            data: () => inject(StaffListService).getData(),
        },
    },
] as Routes;
