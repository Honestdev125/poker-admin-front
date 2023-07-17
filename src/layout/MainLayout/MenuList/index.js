import { memo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography, useMediaQuery } from '@mui/material';

// project imports
import menuItem from 'menu-items';
import NavGroup from './NavGroup';
import useConfig from 'hooks/useConfig';

import LAYOUT_CONST from 'constant';
import { HORIZONTAL_MAX_ITEM } from 'config';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const theme = useTheme();
    const { layout } = useConfig();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    // last menu-item to show in horizontal menu bar
    const lastItem = layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd ? HORIZONTAL_MAX_ITEM : null;

    let lastItemIndex = menuItem.items.length - 1;
    let remItems = [];
    let lastItemId;

    if (lastItem && lastItem < menuItem.items.length) {
        lastItemId = menuItem.items[lastItem - 1].id;
        lastItemIndex = lastItem - 1;
        remItems = menuItem.items.slice(lastItem - 1, menuItem.items.length).map((item) => ({
            title: item.title,
            elements: item.children
        }));
    }

    const navItems = menuItem.items.slice(0, lastItemIndex + 1).map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} lastItem={lastItem} remItems={remItems} lastItemId={lastItemId} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default memo(MenuList);
