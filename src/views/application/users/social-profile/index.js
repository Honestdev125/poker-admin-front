import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material';

// project imports
import Profile from './Profile';
import Followers from './Followers';
import Friends from './Friends';
import Gallery from './Gallery';
import FriendRequest from './FriendRequest';
import useAuth from 'hooks/useAuth';
import useConfig from 'hooks/useConfig';
import Avatar from 'ui-component/extended/Avatar';
import Chip from 'ui-component/extended/Chip';
import MainCard from 'ui-component/cards/MainCard';
import ImagePlaceholder from 'ui-component/cards/Skeleton/ImagePlaceholder';
import { gridSpacing } from 'store/constant';

// assets
import { IconFriends, IconInbox, IconPhoto, IconUserPlus, IconUsers } from '@tabler/icons';
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';

import User1 from 'assets/images/users/img-user.png';
import Cover from 'assets/images/profile/img-profile-bg.png';

function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box
                    sx={{
                        p: 0
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const tabOptions = [
    {
        to: '/user/social-profile/posts',
        icon: <IconInbox stroke={1.5} size="17px" />,
        label: 'Profile'
    },
    {
        to: '/user/social-profile/follower',
        icon: <IconUsers stroke={1.5} size="17px" />,
        label: 'Followers'
    },
    {
        to: '/user/social-profile/friends',
        icon: <IconFriends stroke={1.5} size="17px" />,
        label: (
            <>
                friends <Chip label="100" size="small" chipcolor="secondary" sx={{ ml: 1.5 }} />
            </>
        )
    },
    {
        to: '/user/social-profile/gallery',
        icon: <IconPhoto stroke={1.5} size="17px" />,
        label: 'Gallery'
    },
    {
        to: '/user/social-profile/friend-request',
        icon: <IconUserPlus stroke={1.5} size="17px" />,
        label: 'Friend Request'
    }
];

// ==============================|| SOCIAL PROFILE ||============================== //

const SocialProfile = () => {
    const theme = useTheme();

    const { user } = useAuth();
    const { borderRadius } = useConfig();
    const { tab } = useParams();

    let selectedTab = 0;
    switch (tab) {
        case 'follower':
            selectedTab = 1;
            break;
        case 'friends':
            selectedTab = 2;
            break;
        case 'gallery':
            selectedTab = 3;
            break;
        case 'friend-request':
            selectedTab = 4;
            break;
        case 'posts':
        default:
            selectedTab = 0;
    }
    const [value, setValue] = React.useState(selectedTab);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard
                    contentSX={{
                        p: 1.5,
                        paddingBottom: '0px !important',
                        [theme.breakpoints.down('lg')]: {
                            textAlign: 'center'
                        }
                    }}
                >
                    {isLoading ? (
                        <ImagePlaceholder
                            sx={{
                                borderRadius: `${borderRadius}px`,
                                overflow: 'hidden',
                                mb: 3,
                                height: { xs: 85, sm: 150, md: 260 }
                            }}
                        />
                    ) : (
                        <CardMedia
                            component="img"
                            image={Cover}
                            sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', mb: 3 }}
                            alt="pro images"
                        />
                    )}
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={3}>
                            {isLoading ? (
                                <ImagePlaceholder
                                    sx={{
                                        margin: '-70px 0 0 auto',
                                        borderRadius: '16px',
                                        [theme.breakpoints.down('lg')]: {
                                            margin: '-70px auto 0'
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            margin: '-60px auto 0'
                                        },
                                        width: { xs: 72, sm: 100, md: 140 },
                                        height: { xs: 72, sm: 100, md: 140 }
                                    }}
                                />
                            ) : (
                                <Avatar
                                    alt="User 1"
                                    src={User1}
                                    sx={{
                                        margin: '-70px 0 0 auto',
                                        borderRadius: '16px',
                                        [theme.breakpoints.down('lg')]: {
                                            margin: '-70px auto 0'
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            margin: '-60px auto 0'
                                        },
                                        width: { xs: 72, sm: 100, md: 140 },
                                        height: { xs: 72, sm: 100, md: 140 }
                                    }}
                                />
                            )}
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h5">{user?.name}</Typography>
                                    <Typography variant="subtitle2">Android Developer</Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Grid
                                        container
                                        spacing={1}
                                        sx={{
                                            justifyContent: 'flex-end',
                                            [theme.breakpoints.down('lg')]: {
                                                justifyContent: 'center'
                                            }
                                        }}
                                    >
                                        <Grid item>
                                            <Button variant="outlined">Message</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" startIcon={<PersonAddTwoToneIcon />}>
                                                Send Request
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Tabs
                                    value={value}
                                    variant="scrollable"
                                    onChange={handleChange}
                                    sx={{
                                        marginTop: 2.5,
                                        '& .MuiTabs-flexContainer': {
                                            border: 'none'
                                        },
                                        '& a': {
                                            minHeight: 'auto',
                                            minWidth: 10,
                                            py: 1.5,
                                            px: 1,
                                            mr: 2.25,
                                            color: 'grey.700',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        '& a.Mui-selected': {
                                            color: 'primary.main'
                                        },
                                        '& a > svg': {
                                            marginBottom: '4px !important',
                                            mr: 1.25
                                        }
                                    }}
                                >
                                    {tabOptions.map((option, index) => (
                                        <Tab
                                            key={index}
                                            component={Link}
                                            to={option.to}
                                            icon={option.icon}
                                            label={option.label}
                                            {...a11yProps(index)}
                                        />
                                    ))}
                                </Tabs>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <TabPanel value={value} index={0}>
                    <Profile />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Followers />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Friends />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Gallery />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <FriendRequest />
                </TabPanel>
            </Grid>
        </Grid>
    );
};

export default SocialProfile;
