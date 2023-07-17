import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// third party
import ApexCharts from 'apexcharts';

// project imports
import MarketSaleChartCard from './MarketSaleChartCard';
import RevenueChartCard from './RevenueChartCard';
import ConversionsChartCard from './ConversionsChartCard';
import SatisfactionChartCard from './SatisfactionChartCard';
import useConfig from 'hooks/useConfig';
import TotalLineChartCard from 'ui-component/cards/TotalLineChartCard';
import SeoChartCard from 'ui-component/cards/SeoChartCard';
import SalesLineChartCard from 'ui-component/cards/SalesLineChartCard';
import AnalyticsChartCard from 'ui-component/cards/AnalyticsChartCard';
import { gridSpacing } from 'store/constant';

// chart data
import chartData from './chart-data';

// assets
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import LaptopIcon from '@mui/icons-material/Laptop';

// ================================|| CHART ||================================ //

const Chart = () => {
    const theme = useTheme();
    const { navType } = useConfig();

    const backColor = theme.palette.background.paper;
    const secondary = theme.palette.secondary.main;
    const error = theme.palette.error.main;
    const primary = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;
    const orange = theme.palette.orange.main;
    const orangeDark = theme.palette.orange.dark;

    React.useEffect(() => {
        const newChartData = {
            ...chartData.MarketChartCardData.options,
            colors: [secondary, error, primary],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newRevenueChartCardData = {
            ...chartData.RevenueChartCardData.options,
            colors: [error, primary, secondary],
            stroke: {
                colors: [backColor]
            }
        };

        const newSeoChartCardData1 = {
            ...chartData.SeoChartCardData1.options,
            colors: [primary],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSeoChartCardData2 = {
            ...chartData.SeoChartCardData2.options,
            colors: [successDark],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSeoChartCardData3 = {
            ...chartData.SeoChartCardData3.options,
            colors: [error],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSeoChartCardData4 = {
            ...chartData.SeoChartCardData4.options,
            colors: [orange],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSeoChartCardData5 = {
            ...chartData.SeoChartCardData5.options,
            colors: [secondary],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSeoChartCardData6 = {
            ...chartData.SeoChartCardData6.options,
            colors: [error],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSeoChartCardData7 = {
            ...chartData.SeoChartCardData7.options,
            colors: [secondary],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSeoChartCardData8 = {
            ...chartData.SeoChartCardData8.options,
            colors: [primary],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSeoChartCardData9 = {
            ...chartData.SeoChartCardData9.options,
            colors: [successDark],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newAnalyticsChartCardData = {
            ...chartData.AnalyticsChartCardData.options,
            colors: [primary, successDark, error, orangeDark],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newConversionsChartCardData = {
            ...chartData.ConversionsChartCardData.options,
            colors: [secondary],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        const newSatisfactionChartCardData = {
            ...chartData.SatisfactionChartCardData.options,
            theme: {
                monochrome: {
                    color: orangeDark
                }
            },
            stroke: {
                colors: [backColor]
            }
        };

        ApexCharts.exec(`market-sale-chart`, 'updateOptions', newChartData);
        ApexCharts.exec(`revenue-chart`, 'updateOptions', newRevenueChartCardData);

        ApexCharts.exec(`visit-chart`, 'updateOptions', newSeoChartCardData1);
        ApexCharts.exec(`bounce-bar-chart`, 'updateOptions', newSeoChartCardData2);
        ApexCharts.exec(`product-chart`, 'updateOptions', newSeoChartCardData3);

        ApexCharts.exec(`user-analytics-chart`, 'updateOptions', newSeoChartCardData4);
        ApexCharts.exec(`session-timeout-chart`, 'updateOptions', newSeoChartCardData5);
        ApexCharts.exec(`page-view-chart`, 'updateOptions', newSeoChartCardData6);
        ApexCharts.exec(`page-session-chart`, 'updateOptions', newSeoChartCardData7);
        ApexCharts.exec(`avg-session-chart`, 'updateOptions', newSeoChartCardData8);
        ApexCharts.exec(`bounce-rate-chart`, 'updateOptions', newSeoChartCardData9);

        ApexCharts.exec(`percentage-chart`, 'updateOptions', newAnalyticsChartCardData);
        ApexCharts.exec(`new-stack-chart`, 'updateOptions', newConversionsChartCardData);
        ApexCharts.exec(`satisfaction-chart`, 'updateOptions', newSatisfactionChartCardData);
    }, [navType, backColor, secondary, error, primary, successDark, orange, orangeDark]);

    return (
        <Grid container spacing={gridSpacing} alignItems="center">
            <Grid item xs={12} sm={6} lg={3}>
                <TotalLineChartCard chartData={chartData.TotalLineCardChart1} value={4000} title="Total Sales" percentage="42%" />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <TotalLineChartCard
                    chartData={chartData.TotalLineCardChart2}
                    bgColor={theme.palette.error.main}
                    value={2500}
                    title="Total Comment"
                    percentage="15%"
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <TotalLineChartCard
                    chartData={chartData.TotalLineCardChart3}
                    bgColor={theme.palette.success.dark}
                    value={2500}
                    title="Total Status"
                    percentage="95%"
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <TotalLineChartCard
                    chartData={chartData.TotalLineCardChart3}
                    bgColor={theme.palette.secondary.main}
                    value={12500}
                    title="Total Visitors"
                    percentage="75%"
                />
            </Grid>

            <Grid item xs={12} md={6} lg={7}>
                <MarketSaleChartCard chartData={chartData.MarketChartCardData} />
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <RevenueChartCard chartData={chartData.RevenueChartCardData} />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2}>
                <SeoChartCard type={1} chartData={chartData.SeoChartCardData4} value={798} title="Users" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <SeoChartCard type={1} chartData={chartData.SeoChartCardData5} value={486} title="Timeout" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <SeoChartCard type={1} chartData={chartData.SeoChartCardData6} value="9, 454" title="Views" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <SeoChartCard type={1} chartData={chartData.SeoChartCardData7} value={7.15} title="Session" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <SeoChartCard type={1} chartData={chartData.SeoChartCardData8} value="04:30" title="Avg. Session" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <SeoChartCard type={1} chartData={chartData.SeoChartCardData9} value="1.55%" title="Bounce Rate" />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <SalesLineChartCard
                    chartData={chartData.SalesLineCardChart}
                    bgColor={theme.palette.error.main}
                    title="Sales Per Day"
                    percentage="3%"
                    icon={<TrendingDownIcon />}
                    footerData={[
                        {
                            value: '$4230',
                            label: 'Total Revenue'
                        },
                        {
                            value: '321',
                            label: 'Today Sales'
                        }
                    ]}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <SalesLineChartCard
                    chartData={chartData.SalesLineCardChart}
                    title="Order Per Month"
                    percentage="28%"
                    icon={<TrendingDownIcon />}
                    footerData={[
                        {
                            value: '1695',
                            label: 'Total Orders'
                        },
                        {
                            value: '321',
                            label: 'Today Orders'
                        }
                    ]}
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <AnalyticsChartCard
                    chartData={chartData.AnalyticsChartCardData}
                    title="Page view by device"
                    dropData={{
                        title: 'Weekly',
                        options: [
                            {
                                value: 1,
                                label: '1 Week'
                            },
                            {
                                value: 104,
                                label: '2 Years'
                            },
                            {
                                value: 12,
                                label: '3 Monthes'
                            }
                        ]
                    }}
                    listData={[
                        {
                            color: theme.palette.primary.main,
                            icon: <ImportantDevicesIcon color="inherit" fontSize="small" />,
                            value: 66.6,
                            percentage: 2,
                            state: 1
                        },
                        {
                            color: theme.palette.success.dark,
                            icon: <PhonelinkLockIcon color="inherit" fontSize="small" />,
                            value: 29.7,
                            percentage: 3,
                            state: 1
                        },
                        {
                            color: theme.palette.error.main,
                            icon: <TabletAndroidIcon color="inherit" fontSize="small" />,
                            value: 32.8,
                            percentage: 8,
                            state: 0
                        },
                        {
                            color: theme.palette.orange.dark,
                            icon: <LaptopIcon color="inherit" fontSize="small" />,
                            value: 50.2,
                            percentage: 5,
                            state: 1
                        }
                    ]}
                />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <SeoChartCard
                    chartData={chartData.SeoChartCardData1}
                    value="$16, 756"
                    title="Visits"
                    icon={<ArrowDropDownIcon color="error" />}
                />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <SeoChartCard
                    chartData={chartData.SeoChartCardData2}
                    value="49.54%"
                    title="Bounce Rate"
                    icon={<ArrowDropUpIcon color="primary" />}
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <SeoChartCard
                    chartData={chartData.SeoChartCardData3}
                    value="1, 62,564"
                    title="Products"
                    icon={<ArrowDropDownIcon color="error" />}
                />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <ConversionsChartCard chartData={chartData.ConversionsChartCardData} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <SatisfactionChartCard chartData={chartData.SatisfactionChartCardData} />
            </Grid>
        </Grid>
    );
};

export default Chart;
