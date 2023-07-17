import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, ButtonGroup, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// project imports
import useConfig from 'hooks/useConfig';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import ToggleButton from '@mui/material/ToggleButton';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircle';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

// styles
const FeatureTitleWrapper = styled(CardContent)(({ theme }) => ({
    background: theme.palette.mode === 'dark' ? `${theme.palette.background.default} !important` : `${theme.palette.grey[100]} !important`,
    textAlign: 'left',
    paddingTop: 12,
    paddingBottom: '12px !important'
}));

const FeatureContentWrapper = styled(CardContent)(({ theme }) => ({
    borderLeft: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? `${theme.palette.background.default} !important` : `${theme.palette.grey[200]} !important`,
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.25rem',
        padding: '40px 16px'
    }
}));

const PopularBadgeWrapper = styled('div')(({ theme, rtlLayout }) => ({
    background: theme.palette.secondary.main,
    color: '#fff',
    display: 'inline-block',
    padding: '40px 40px 5px',
    fontSize: '0.8125rem',
    position: 'absolute',
    top: -24,
    right: -55,
    transform: rtlLayout ? 'rotate(316deg)' : 'rotate(45deg)'
}));

const plans = [
    {
        id: 1,
        popular: false,
        title: 'Starters',
        price: {
            monthly: 25,
            yearly: 225
        }
    },
    {
        id: 2,
        popular: true,
        title: 'Scalability',
        price: {
            monthly: 125,
            yearly: 825
        }
    },
    {
        id: 3,
        popular: false,
        title: 'Enterprise',
        price: {
            monthly: 225,
            yearly: 1025
        }
    }
];

const planList = [
    {
        type: 'group',
        label: 'Features'
    },
    {
        type: 'list',
        label: 'Only 1 User uses',
        permission: [1, 1, 1]
    },
    {
        type: 'list',
        label: '10 Projects for',
        permission: [0, 1, 1]
    },
    {
        type: 'list',
        label: 'Unlimited Bandwidth',
        permission: [0, 0, 1]
    },
    {
        type: 'list',
        label: 'Unlimited Data',
        permission: [0, 0, 1]
    },
    {
        type: 'group',
        label: 'Storage & Security'
    },
    {
        type: 'list',
        label: '5GB of Storage',
        permission: [0, 1, 1]
    },
    {
        type: 'list',
        label: 'Fully Security Suite',
        permission: [0, 0, 1]
    }
];

const PlanList = ({ plan, view, priceFlag }) => {
    const theme = useTheme();
    const { rtlLayout } = useConfig();

    return (
        <Grid item xs={12} sm={3} md={3} sx={{ display: view !== plan.id ? { xs: 'none', sm: 'block' } : 'block' }}>
            <FeatureContentWrapper>
                {plan.popular && <PopularBadgeWrapper rtlLayout={rtlLayout}>Popular</PopularBadgeWrapper>}
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h6"
                            sx={{ fontSize: '1.25rem', fontWeight: 500, position: 'relative', color: theme.palette.primary.main }}
                        >
                            {plan.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                '& > span': {
                                    fontSize: '1.25rem',
                                    fontWeight: 500
                                },
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '1.25rem',
                                    '& > span': {
                                        fontSize: '1rem'
                                    }
                                }
                            }}
                        >
                            <sup>$</sup>
                            {priceFlag === 'yearly' ? plan.price.yearly : plan.price.monthly}
                            <span>/{priceFlag === 'yearly' ? 'Year' : 'Month'}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </FeatureContentWrapper>
        </Grid>
    );
};

PlanList.propTypes = {
    plan: PropTypes.object,
    view: PropTypes.number,
    priceFlag: PropTypes.string
};

const ListItem = ({ item, index, view }) => (
    <Grid item xs={4} sm={3} md={3} sx={{ display: view !== index + 1 ? { xs: 'none', sm: 'block' } : 'block' }}>
        {item === 1 && (
            <Box sx={{ px: 3, py: 1.5 }}>
                <CheckCircleTwoToneIcon sx={{ color: 'success.dark' }} />
            </Box>
        )}
        {item === 0 && (
            <Box sx={{ px: 3, py: 1.5 }}>
                <RemoveRoundedIcon sx={{ opacity: '0.3' }} />
            </Box>
        )}
    </Grid>
);

ListItem.propTypes = {
    item: PropTypes.number,
    index: PropTypes.number,
    view: PropTypes.number
};

const OrderButton = ({ view, index, popular }) => (
    <Grid item xs={12} sm={3} md={3} sx={{ display: view !== index ? { xs: 'none', sm: 'block' } : 'block' }}>
        <FeatureContentWrapper>
            <Button variant={popular ? 'contained' : 'outlined'} color={popular ? 'secondary' : 'primary'}>
                Order Now
            </Button>
        </FeatureContentWrapper>
    </Grid>
);

OrderButton.propTypes = {
    popular: PropTypes.bool,
    index: PropTypes.number,
    view: PropTypes.number
};

// =============================|| PRICING - PRICE 2 ||============================= //

const Price2 = () => {
    const theme = useTheme();
    const [priceFlag, setPriceFlag] = React.useState('monthly');

    const [view, setView] = React.useState(1);
    const handleChange = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    return (
        <>
            <Stack direction="row" spacing={gridSpacing} justifyContent="center">
                <ButtonGroup disableElevation variant="contained" sx={{ mb: 3 }}>
                    <Button
                        size="large"
                        sx={{ bgcolor: priceFlag === 'yearly' ? 'primary.main' : 'primary.200' }}
                        onClick={() => setPriceFlag('yearly')}
                    >
                        Annual
                    </Button>
                    <Button
                        size="large"
                        sx={{ bgcolor: priceFlag === 'monthly' ? 'primary.main' : 'primary.200' }}
                        onClick={() => setPriceFlag('monthly')}
                    >
                        Monthly
                    </Button>
                </ButtonGroup>
            </Stack>

            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Card sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <CardContent>
                            <ToggleButtonGroup
                                orientation="vertical"
                                value={view}
                                exclusive
                                onChange={handleChange}
                                sx={{
                                    width: '100%',
                                    '& > button': {
                                        border: 'none',
                                        borderRadius: '5px ​!important'
                                    },
                                    '& > button.Mui-selected': {
                                        background: `${theme.palette.background.default}!important`,
                                        color: theme.palette.primary.main
                                    }
                                }}
                            >
                                {plans.map((plan, index) => (
                                    <ToggleButton key={index} value={plan.id}>
                                        {plan.title}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <MainCard content={false} sx={{ textAlign: 'center' }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={3} md={3} />
                            {plans.map((plan, index) => (
                                <PlanList plan={plan} view={view} priceFlag={priceFlag} key={index} />
                            ))}
                        </Grid>
                        {planList.map((list, index) => (
                            <React.Fragment key={index}>
                                {list.type === 'group' && (
                                    <FeatureTitleWrapper>
                                        <Typography variant="subtitle1">{list.label}</Typography>
                                    </FeatureTitleWrapper>
                                )}
                                {list.type === 'list' && (
                                    <Grid
                                        container
                                        spacing={0}
                                        sx={{
                                            borderBottom: '1px solid',
                                            borderColor:
                                                theme.palette.mode === 'dark'
                                                    ? `${theme.palette.background.default} !important`
                                                    : `${theme.palette.grey[200]} !important`
                                        }}
                                    >
                                        <Grid item xs={8} sm={3} md={3}>
                                            <Box sx={{ px: 3, py: 1.5 }}>
                                                <Typography component="div" align="left" variant="body2">
                                                    {list.label}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        {list.permission?.map((item, i) => (
                                            <ListItem key={i} item={item} index={index} view={view} />
                                        ))}
                                    </Grid>
                                )}
                            </React.Fragment>
                        ))}
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={3} md={3} />
                            <OrderButton view={view} index={1} />
                            <OrderButton view={view} index={2} popular />
                            <OrderButton view={view} index={3} />
                        </Grid>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
};

export default Price2;
