// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, LinearProgress, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| WIDGET STATISTICS - PROJECT TASK CARD ||=========================== //

const ProjectTaskCard = () => {
    const theme = useTheme();
    return (
        <MainCard>
            <Grid container alignItems="center" spacing={gridSpacing}>
                <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" align="left">
                                Published Project
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="left">
                                532
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <LinearProgress variant="determinate" value={40} color="secondary" aria-label="project progress" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" align="left">
                                Completed Task
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="left">
                                4,569
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {/** had wrong colour, colour is an enum not string */}
                            <LinearProgress
                                variant="determinate"
                                value={70}
                                sx={{
                                    bgcolor: theme.palette.success.light,
                                    '& .MuiLinearProgress-bar': { bgcolor: theme.palette.success.dark }
                                }}
                                aria-label="completed task progress"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" align="left">
                                Pending Task
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="left">
                                1,005
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {/** had wrong colour, colour is an enum not string */}
                            <LinearProgress
                                variant="determinate"
                                value={30}
                                sx={{
                                    bgcolor: theme.palette.orange.light,
                                    '& .MuiLinearProgress-bar': { bgcolor: theme.palette.orange.main }
                                }}
                                aria-label="pending task progress"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" align="left">
                                Issues
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="left">
                                365
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <LinearProgress
                                variant="determinate"
                                value={10}
                                sx={{
                                    bgcolor: theme.palette.error.light,
                                    '& .MuiLinearProgress-bar': { bgcolor: theme.palette.error.main }
                                }}
                                aria-label="issues progress"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ProjectTaskCard;
