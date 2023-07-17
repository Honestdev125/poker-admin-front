// material-ui
import { Button, CardActions, CardContent, Divider, Grid } from '@mui/material';

// project imports
import ToDoList from './ToDoList';
import TrafficSources from './TrafficSources';
import TeamMembers from './TeamMembers';

import UserActivity from './UserActivity';
import LatestMessages from './LatestMessages';

import ProjectTable from './ProjectTable';
import ProductSales from './ProductSales';

import TasksCard from './TasksCard';
import ApplicationSales from './ApplicationSales';

import ActiveTickets from './ActiveTickets';
import LatestPosts from './LatestPosts';

import FeedsCard from './FeedsCard';
import LatestCustomers from './LatestCustomers';

import LatestOrder from './LatestOrder';

import IncomingRequests from './IncomingRequests';
import TotalRevenue from './TotalRevenue';
import NewCustomers from './NewCustomers';

import RecentTickets from './RecentTickets';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| WIDGET DATA ||=========================== //

const WidgetData = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={4} md={6}>
            <ToDoList />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
            <TrafficSources />
        </Grid>
        <Grid item xs={12} lg={4} md={12}>
            <TeamMembers title="Team Members" />
        </Grid>

        <Grid item xs={12} md={7} lg={6}>
            <UserActivity title="User Activity" />
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
            <LatestMessages title="Messages" />
        </Grid>

        <Grid item xs={12} lg={6} md={6}>
            <MainCard title="Projects" content={false}>
                <CardContent sx={{ p: 0 }}>
                    <ProjectTable />
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="text" size="small">
                        View all Projects
                    </Button>
                </CardActions>
            </MainCard>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
            <ProductSales title="Product Sales" />
        </Grid>

        <Grid item xs={12} md={4}>
            <TasksCard title="Tasks" />
        </Grid>
        <Grid item xs={12} md={8}>
            <ApplicationSales title="Application Sales" />
        </Grid>

        <Grid item xs={12} md={8}>
            <ActiveTickets title="Active Tickets" />
        </Grid>
        <Grid item xs={12} md={4}>
            <LatestPosts title="Latest Posts" />
        </Grid>

        <Grid item xs={12} md={5} lg={4}>
            <FeedsCard title="Feeds" />
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
            <LatestCustomers title="Latest Customers" />
        </Grid>

        <Grid item xs={12}>
            <LatestOrder title="Latest Order" />
        </Grid>

        <Grid item xs={12} lg={4} md={6}>
            <IncomingRequests title="Incoming Requests" />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
            <TotalRevenue title="Total Revenue" />
        </Grid>
        <Grid item xs={12} lg={4} md={12}>
            <NewCustomers title="New Customers" />
        </Grid>

        <Grid item xs={12} md={12} lg={8}>
            <RecentTickets title="Recent Tickets" />
        </Grid>
    </Grid>
);

export default WidgetData;
