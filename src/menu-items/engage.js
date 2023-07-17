// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDatabase, IconBookmark, IconApps, IconFileDescription } from '@tabler/icons';

// constant
const icons = {
    IconBookmark,
    IconDatabase,
    IconFileDescription,
    IconApps
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const engage = {
    id: 'engage',
    title: <FormattedMessage id="engage" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'economy',
            title: <FormattedMessage id="economy" />,
            type: 'item',
            icon: icons.IconDatabase,
            url: '/app/economy'
        },
        {
            id: 'leaderboards',
            title: 'leaderboards',
            type: 'item',
            icon: icons.IconBookmark,
            url: '/app/leaderboards'
        },
        {
            id: 'content',
            title: <FormattedMessage id="content" />,
            type: 'item',
            icon: icons.IconFileDescription,
            url: '/app/content'
        }
    ]
};

export default engage;
