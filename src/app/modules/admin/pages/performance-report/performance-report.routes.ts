import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import {PerformanceReportComponent } from 'app/modules/admin/pages/performance-report/performance-report.component';
import { PerformanceReportService } from './performance-report.service';

export default [
    {
        path     : '',
        component: PerformanceReportComponent,
        resolve  : {
            data: () => inject(PerformanceReportService).getData(),
        },
    },
] as Routes;
