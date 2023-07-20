// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconDashboard,
    IconDeviceAnalytics,
    IconWorld,
    IconUsers,
    IconTableOptions,
    IconRobot,
    IconCopy,
    IconFileDescription
} from '@tabler/icons';

const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconCopy,
    IconFileDescription,
    IconRobot,
    IconTableOptions,
    IconUsers,
    IconWorld
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const build = {
    // id: 'dashboard',
    // title: <FormattedMessage id="dashboard" />,
    // icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'dashboardc',
            title: <FormattedMessage id="dashboardc" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'players',
            title: <FormattedMessage id="players" />,
            type: 'item',
            url: '/dashboard/player',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'tournament',
            title: <FormattedMessage id="tournament" />,
            type: 'item',
            url: '/dashboard/tournament',
            icon: icons.IconWorld,
            breadcrumbs: false
        },
        {
            id: 'texas Holdem',
            title: <FormattedMessage id="texas-holdem" />,
            type: 'item',
            url: '/dashboard/texas',
            icon: icons.IconCopy,
            breadcrumbs: false
        },
        {
            id: 'transaction',
            title: <FormattedMessage id="transaction" />,
            type: 'item',
            url: '/dashboard/transaction',
            icon: icons.IconTableOptions,
            breadcrumbs: false
        }
        // {
        //     id: 'automation',
        //     title: <FormattedMessage id="automation" />,
        //     type: 'item',
        //     url: '/build/automation',
        //     icon: icons.IconRobot,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'add-ons',
        //     title: <FormattedMessage id="add-ons" />,
        //     type: 'item',
        //     url: '/build/add-ons',
        //     icon: icons.IconTableOptions,
        //     breadcrumbs: false
        // }
    ]
};

export default build;
