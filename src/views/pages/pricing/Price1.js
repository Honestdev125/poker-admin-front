import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import TwoWheelerTwoToneIcon from '@mui/icons-material/TwoWheelerTwoTone';
import AirportShuttleTwoToneIcon from '@mui/icons-material/AirportShuttleTwoTone';
import DirectionsBoatTwoToneIcon from '@mui/icons-material/DirectionsBoatTwoTone';

const plans = [
    {
        active: false,
        icon: <TwoWheelerTwoToneIcon fontSize="large" color="inherit" />,
        title: 'Standard',
        description:
            'Create one end product for a client, transfer that end product to your client, charge them for your services. The license is then transferred to the client.',
        price: 69,
        permission: [0, 1]
    },
    {
        active: true,
        icon: <AirportShuttleTwoToneIcon fontSize="large" />,
        title: 'Standard Plus',
        description:
            'Create one end product for a client, transfer that end product to your client, charge them for your services. The license is then transferred to the client.',
        price: 129,
        permission: [0, 1, 2, 3]
    },
    {
        active: false,
        icon: <DirectionsBoatTwoToneIcon fontSize="large" />,
        title: 'Extended',
        description:
            'You are licensed to use the CONTENT to create one end product for yourself or for one client (a “single application”), and the end product may be sold or distributed for free.',
        price: 599,
        permission: [0, 1, 2, 3, 5]
    }
];

const planList = [
    'One End Product', // 0
    'No attribution required', // 1
    'TypeScript', // 2
    'Figma Design Resources', // 3
    'Create Multiple Products', // 4
    'Create a SaaS Project', // 5
    'Resale Product', // 6
    'Separate sale of our UI Elements?' // 7
];

// ===============================|| PRICING - PRICE 1 ||=============================== //

const Price1 = () => {
    const theme = useTheme();
    const priceListDisable = {
        opacity: '0.4',
        '& >div> svg': {
            fill: theme.palette.secondary.light
        }
    };
    return (
        <Grid container spacing={gridSpacing}>
            {plans.map((plan, index) => {
                const darkBorder = theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75;
                return (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <MainCard
                            boxShadow
                            sx={{
                                pt: 1.75,
                                border: plan.active ? '2px solid' : '1px solid',
                                borderColor: plan.active ? 'secondary.main' : darkBorder
                            }}
                        >
                            <Grid container textAlign="center" spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            width: 80,
                                            height: 80,
                                            background:
                                                theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.primary.light,
                                            color: theme.palette.primary.main,
                                            '& > svg': {
                                                width: 35,
                                                height: 35
                                            }
                                        }}
                                    >
                                        {plan.icon}
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: '1.5625rem',
                                            fontWeight: 500,
                                            position: 'relative',
                                            mb: 1.875,
                                            '&:after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: -15,
                                                left: 'calc(50% - 25px)',
                                                width: 50,
                                                height: 4,
                                                background: theme.palette.primary.main,
                                                borderRadius: '3px'
                                            }
                                        }}
                                    >
                                        {plan.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">{plan.description}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        sx={{
                                            fontSize: '2.1875rem',
                                            fontWeight: 700,
                                            '& > span': {
                                                fontSize: '1.25rem',
                                                fontWeight: 500
                                            }
                                        }}
                                    >
                                        <sup>$</sup>
                                        {plan.price}
                                        <span>/Lifetime</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <List
                                        sx={{
                                            m: 0,
                                            p: 0,
                                            '&> li': {
                                                px: 0,
                                                py: 0.625,
                                                '& svg': {
                                                    fill: theme.palette.success.dark
                                                }
                                            }
                                        }}
                                        component="ul"
                                    >
                                        {planList.map((list, i) => (
                                            <React.Fragment key={i}>
                                                <ListItem sx={!plan.permission.includes(i) ? priceListDisable : {}}>
                                                    <ListItemIcon>
                                                        <CheckTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={list} />
                                                </ListItem>
                                                <Divider />
                                            </React.Fragment>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined">Order Now</Button>
                                </Grid>
                            </Grid>
                        </MainCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Price1;
