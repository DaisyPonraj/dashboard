import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes')},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes')}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes')},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')}
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes')},
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.routes')},
            {path: 'add-passenger', loadChildren: () => import('app/modules/admin/pages/add-passenger/add-passenger.routes')},
            {path: 'passenger-list', loadChildren: () => import('app/modules/admin/pages/passenger-list/passenger-list.routes')},
            {path: 'staff-list', loadChildren: () => import('app/modules/admin/pages/staff-list/staff-list.routes')},
            {path: 'bookings-list', loadChildren: () => import('app/modules/admin/pages/bookings/bookings.routes')},
            {path: 'trips-list', loadChildren: () => import('app/modules/admin/pages/trip-list/trip-list.routes')},
            {path: 'route-list', loadChildren: () => import('app/modules/admin/pages/route-list/route-list.routes')},
            {path: 'add-route', loadChildren: () => import('app/modules/admin/pages/add-route/add-route.routes')},
            {path: 'station-list', loadChildren: () => import('app/modules/admin/pages/station-list/station-list.routes')},
            {path: 'revenue-list', loadChildren: () => import('app/modules/admin/pages/revenue-list/revenue-list.routes')},
            {path: 'bus-list', loadChildren: () => import('app/modules/admin/pages/bus-list/bus-list.routes')},
            {path: 'bus-company-list', loadChildren: () => import('app/modules/admin/pages/bus-company-list/bus-company-list.routes')},
            {path: 'dashboard', loadChildren: () => import('app/modules/admin/pages/dashboard/dashboard.routes')},
            {path: 'add-station', loadChildren: () => import('app/modules/admin/pages/add-station/add-station.routes')},
            {path: 'performance-report', loadChildren: () => import('app/modules/admin/pages/performance-report/performance-report.routes')},
            {path: 'add-bus', loadChildren: () => import('app/modules/admin/pages/add-bus/add-bus.routes')},
            {path: 'add-bus-company', loadChildren: () => import('app/modules/admin/pages/add-bus-company/add-bus-company.routes')},
        ]
    }
];
