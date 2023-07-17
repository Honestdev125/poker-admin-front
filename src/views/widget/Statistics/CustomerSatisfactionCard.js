// material-ui
import { Grid, LinearProgress, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| WIDGET STATISTICS - CUSTOMER SATISFACTION ||=========================== //

const CustomerSatisfactionCard = () => (
    <MainCard title="Customer satisfaction">
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h3" align="center">
                    89.73%
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <LinearProgress variant="determinate" value={67} color="primary" aria-label="Customer satisfaction percentage" />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">previous</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5">56.75</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">Change</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5">+12.60</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">Trend</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5">23.78</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
);

export default CustomerSatisfactionCard;
