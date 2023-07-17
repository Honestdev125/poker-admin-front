// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconFlask, IconPlug, IconBrandIntercom, IconPictureInPicture } from '@tabler/icons';

// constant
const icons = {
    IconFlask,
    IconBrandIntercom,
    IconPlug,
    IconPictureInPicture
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const analyze = {
    id: 'analyze',
    title: <FormattedMessage id="analyze" />,
    icon: icons.IconPictureInPicture,
    type: 'group',
    children: [
        {
            id: 'dashboards',
            title: <FormattedMessage id="dashboards" />,
            type: 'item',
            url: '/analyze/dashboards',
            icon: icons.IconBrandIntercom
        },
        {
            id: 'experiments',
            title: <FormattedMessage id="experiments" />,
            type: 'item',
            url: '/analyze/experiments',
            icon: icons.IconPlug
        },
        {
            id: 'data',
            title: <FormattedMessage id="data" />,
            type: 'item',
            url: '/analyze/data',
            icon: icons.IconFlask
        }
    ]
};

export default analyze;
