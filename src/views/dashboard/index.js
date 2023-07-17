import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import IconGridCard from 'views/widget/Statistics/IconGridCard';
import TotalCountCard from 'ui-component/cards/TotalCountCard';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';

// project imports

const UserCardList = [
    {
        date: 'Today',
        count: 120,
        icon: <TodayOutlinedIcon />
    },
    {
        date: 'This Week',
        count: 1200,
        icon: <DateRangeOutlinedIcon />
    },
    {
        date: 'This Month',
        count: 12000,
        icon: <CalendarMonthOutlinedIcon />
    },
    {
        date: 'This Year',
        count: 120000,
        icon: <EventNoteOutlinedIcon />
    }
];

const GameCardList = [
    {
        date: 'Today',
        count: 120,
        icon: <TodayOutlinedIcon />
    },
    {
        date: 'This Week',
        count: 1200,
        icon: <DateRangeOutlinedIcon />
    },
    {
        date: 'This Month',
        count: 12000,
        icon: <CalendarMonthOutlinedIcon />
    },
    {
        date: 'This Year',
        count: 120000,
        icon: <EventNoteOutlinedIcon />
    }
];

const Dashboard = () => {
    const theme = useTheme();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container p={3} spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
                <TotalCountCard
                    primary="Total User Count"
                    secondary="16000"
                    iconPrimary={AccountCircleTwoTone}
                    color={theme.palette.secondary.main}
                />
                <IconGridCard content={UserCardList} />
            </Grid>
            <Grid container item xs={12} md={6} lg={4} gap={2}>
                <TotalIncomeLightCard isLoading={isLoading} />
                <TotalOrderLineChartCard isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TotalCountCard
                    primary="Total Game Count"
                    secondary="15000"
                    iconPrimary={SportsEsportsOutlinedIcon}
                    color={theme.palette.info.dark}
                />
                <IconGridCard content={GameCardList} />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
