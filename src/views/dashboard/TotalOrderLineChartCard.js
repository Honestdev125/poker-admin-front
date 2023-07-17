import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

import ChartDataDay from './chart-data/total-order-today-line-chart';
import ChartDataWeek from './chart-data/total-order-week-line-chart';
import ChartDataMonth from './chart-data/total-order-month-line-chart';
import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.primary.dark,
    color: '#fff',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        borderRadius: '50%',
        zIndex: 1,
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 1,
        width: 210,
        height: 210,
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading }) => {
    const theme = useTheme();

    const [timeValue, setTimeValue] = React.useState('today');
    const handleChangeTime = (event, newValue) => {
        setTimeValue(newValue);
    };

    const getEarnAmount = () => {
        let earnValue = 0;
        switch (timeValue) {
            case 'today':
                earnValue = 90;
                break;
            case 'week':
                earnValue = 500;
                break;
            case 'month':
                earnValue = 1000;
                break;
            case 'year':
                earnValue = 9000;
                break;

            default:
                break;
        }

        return <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>${earnValue}</Typography>;
    };
    const getEarnChat = () => {
        let chatProps = '';
        switch (timeValue) {
            case 'today':
                chatProps = { ...ChartDataDay };
                break;
            case 'week':
                chatProps = { ...ChartDataWeek };
                break;
            case 'month':
                chatProps = { ...ChartDataMonth };
                break;
            case 'year':
                chatProps = { ...ChartDataYear };
                break;

            default:
                break;
        }

        return <Chart {...chatProps} />;
    };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper
                    border={false}
                    content={false}
                    sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.warning.light,
                        color: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.warning.dark
                    }}
                >
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Button
                                            disableElevation
                                            variant={timeValue === 'today' ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, 'today')}
                                        >
                                            Today
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={timeValue === 'week' ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, 'week')}
                                        >
                                            Week
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={timeValue === 'month' ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, 'month')}
                                        >
                                            Month
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={timeValue === 'year' ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, 'year')}
                                        >
                                            Year
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 0.75 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Grid container alignItems="center">
                                            <Grid item>{getEarnAmount()}</Grid>
                                            <Grid item xs={12}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1rem',
                                                        fontWeight: 500,
                                                        color:
                                                            theme.palette.mode === 'dark'
                                                                ? theme.palette.text.secondary
                                                                : theme.palette.primary[200]
                                                    }}
                                                >
                                                    Period By Earning
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5}>
                                        {getEarnChat()}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

TotalOrderLineChartCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;
