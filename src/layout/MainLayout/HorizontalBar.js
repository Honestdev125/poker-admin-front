import * as React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Container, useScrollTrigger } from '@mui/material';

// project imports
import MenuList from './MenuList';
import useConfig from 'hooks/useConfig';

// ==============================|| HORIZONTAL MENU LIST ||============================== //

function ElevationScroll({ children, window }) {
    const theme = useTheme();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });

    theme.shadows[4] = theme.customShadows.z1;

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

// ==============================|| HORIZONTAL MENU LIST ||============================== //

const CustomAppBar = () => {
    const theme = useTheme();

    const { container } = useConfig();

    return (
        <ElevationScroll>
            <AppBar
                sx={{
                    top: 71,
                    bgcolor: theme.palette.background.paper,
                    width: '100%',
                    height: 62,
                    justifyContent: 'center',
                    borderTop: `1px solid ${theme.palette.divider}`,
                    zIndex: 1098
                }}
            >
                <Container maxWidth={container ? 'lg' : false}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <MenuList />
                    </Box>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

export default CustomAppBar;
