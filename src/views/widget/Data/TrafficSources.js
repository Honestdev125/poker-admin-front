// material-ui
import { Grid, LinearProgress, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| DATA WIDGET - TRAFFIC SOURCES ||=========================== //

const TrafficSources = () => (
    <MainCard title="Traffic Sources">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Direct</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="right">
                            80%
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={80} color="primary" aria-label='"traffic progress"' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Social</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="right">
                            50%
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={50} color="secondary" aria-label='"traffic progress"' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Referral</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="right">
                            20%
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={20} color="primary" aria-label='"traffic progress"' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Bounce</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="right">
                            58%
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={60} color="secondary" aria-label='"traffic progress"' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Internet</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="right">
                            40%
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={40} color="primary" aria-label='"traffic progress"' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Social</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="right">
                            90%
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={90} color="primary" aria-label='"traffic progress"' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
);

export default TrafficSources;
