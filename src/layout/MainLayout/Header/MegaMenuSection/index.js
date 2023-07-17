import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    useMediaQuery,
    Avatar,
    ClickAwayListener,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListSubheader,
    ListItemText,
    Paper,
    Popper,
    Typography
} from '@mui/material';

// project imports
import Banner from './Banner';
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconAccessPoint } from '@tabler/icons';
import { drawerWidth, gridSpacing } from 'store/constant';

const HeaderAvatarStyle = styled(Avatar)(({ theme }) => ({
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
    '&:hover': {
        background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
    }
}));

// ==============================|| SEARCH INPUT - MEGA MENu||============================== //

const MegaMenuSection = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (matchDownMd && open) setOpen(false);
        // eslint-disable-next-line
    }, [matchDownMd]);

    return (
        <>
            <HeaderAvatarStyle
                variant="rounded"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{ display: { xs: 'none', md: 'flex' } }}
            >
                <IconAccessPoint stroke={1.5} size="20px" />
            </HeaderAvatarStyle>
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                modifiers={[
                    {
                        name: 'offset',
                        options: {
                            offset: [150, 20]
                        }
                    }
                ]}
            >
                {({ TransitionProps }) => (
                    <ClickAwayListener onClickAway={handleClose}>
                        <Transitions in={open} {...TransitionProps}>
                            <Paper
                                sx={{
                                    width: {
                                        md: `calc(100vw - 100px)`,
                                        lg: `calc(100vw - ${drawerWidth + 100}px)`,
                                        xl: `calc(100vw - ${drawerWidth + 140}px)`
                                    },
                                    maxWidth: { xl: 900, md: 764 }
                                }}
                            >
                                {open && (
                                    <MainCard
                                        border={false}
                                        elevation={16}
                                        content={false}
                                        boxShadow
                                        shadow={theme.shadows[16]}
                                        sx={{ p: 1, overflow: { xs: 'visible', md: 'hidden' } }}
                                    >
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item md={4}>
                                                <Banner />
                                            </Grid>
                                            <Grid item md={8}>
                                                <Grid
                                                    container
                                                    spacing={gridSpacing}
                                                    sx={{
                                                        pt: 3,
                                                        '& .MuiListItemButton-root:hover': {
                                                            background: 'transparent',
                                                            '& .MuiTypography-root': {
                                                                color: 'secondary.main'
                                                            }
                                                        },
                                                        '& .MuiListItemIcon-root': {
                                                            minWidth: 16
                                                        }
                                                    }}
                                                >
                                                    <Grid item xs={4}>
                                                        <List
                                                            component="nav"
                                                            aria-labelledby="nested-list-user"
                                                            subheader={
                                                                <ListSubheader id="nested-list-user">
                                                                    <Typography variant="subtitle1"> User Quick</Typography>
                                                                </ListSubheader>
                                                            }
                                                        >
                                                            <ListItemButton disableRipple component={Link} to="/user/social-profile/posts">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Social Profile" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/user/account-profile/profile1">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Account Profile" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/user/card/card1">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="User Cards" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/user/list/list2">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="User List" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/app/contact/c-card">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Contact" />
                                                            </ListItemButton>
                                                        </List>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <List
                                                            component="nav"
                                                            aria-labelledby="nested-list-application"
                                                            subheader={
                                                                <ListSubheader id="nested-list-application">
                                                                    <Typography variant="subtitle1"> Applications </Typography>
                                                                </ListSubheader>
                                                            }
                                                        >
                                                            <ListItemButton component={Link} to="/app/chat">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Chat" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/app/kanban/board">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Kanban" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/app/mail">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Mail" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/app/calendar">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Calendar" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/e-commerce/products">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="E-Commerce" />
                                                            </ListItemButton>
                                                        </List>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <List
                                                            component="nav"
                                                            aria-labelledby="nested-list-primitives"
                                                            subheader={
                                                                <ListSubheader component="div" id="nested-list-primitives">
                                                                    <Typography variant="subtitle1"> Primitives</Typography>
                                                                </ListSubheader>
                                                            }
                                                        >
                                                            <ListItemButton component={Link} to="/utils/util-color">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Colors" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/utils/util-typography">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Typography" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/utils/util-shadow">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Shadows" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/icons/tabler-icons">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Icons" />
                                                            </ListItemButton>
                                                            <ListItemButton component={Link} to="/basic/accordion">
                                                                <ListItemIcon>
                                                                    <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Elements" />
                                                            </ListItemButton>
                                                        </List>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </MainCard>
                                )}
                            </Paper>
                        </Transitions>
                    </ClickAwayListener>
                )}
            </Popper>
        </>
    );
};

export default MegaMenuSection;
