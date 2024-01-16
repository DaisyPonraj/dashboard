/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard'
    }, {
        id: 'bus-company-list',
        title: 'Bus Company',
        type: 'basic',
        icon: 'mat_outline:business',
        link: '/bus-company-list'
    },
    {
        id: 'trips-list',
        title: 'Trips',
        type: 'basic',
        icon: 'heroicons_outline:arrows-up-down',
        link: '/trips-list'
    },
    {
        id: 'route-list',
        title: 'Routes',
        type: 'basic',
        icon: 'heroicons_outline:map',
        link: '/route-list'
    },
    {
        id: 'station-list',
        title: 'Station List',
        type: 'basic',
        icon: 'mat_solid:crop_square',
        link: '/station-list'
    },
    {
        id: 'staff-list',
        title: 'Staff List',
        type: 'basic',
        icon: 'heroicons_outline:user-circle',
        link: '/staff-list'
    },
    {
        id: 'bus-list',
        title: 'Bus List',
        type: 'basic',
        icon: 'mat_outline:directions_bus',
        link: '/bus-list'
    },
    {
        id: 'passenger-list',
        title: 'Passenger List',
        type: 'basic',
        icon: 'heroicons_outline:user-group',
        link: '/passenger-list'
    },
    {
        id: 'bookings-list',
        title: 'Bookings',
        type: 'basic',
        icon: 'heroicons_outline:ticket',
        link: '/bookings-list'
    },
    {
        id: 'revenue-list',
        title: 'Revenue',
        type: 'basic',
        icon: 'heroicons_outline:presentation-chart-line',
        link: '/revenue-list'
    },
    {
        id: 'performance-report',
        title: 'Perfermonace Report',
        type: 'basic',
        icon: 'heroicons_outline:folder',
        link: '/performance-report'
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
