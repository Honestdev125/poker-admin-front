import PropTypes from 'prop-types';

// material-ui
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';
import Avatar4 from 'assets/images/users/avatar-4.png';

// ===========================|| DATA WIDGET - TEAM MEMBERS CARD ||=========================== //

const TeamMembers = ({ title }) => (
    <MainCard title={title} content={false}>
        <CardContent>
            <Grid container spacing={gridSpacing} alignItems="center">
                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar alt="User 1" src={Avatar1} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography align="left" component="div" variant="subtitle1">
                                David Jones
                            </Typography>
                            <Typography align="left" component="div" variant="subtitle2">
                                Developer
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="left" variant="caption">
                                5 min ago
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar alt="User 1" src={Avatar2} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography align="left" component="div" variant="subtitle1">
                                David Jones
                            </Typography>
                            <Typography align="left" component="div" variant="subtitle2">
                                Developer
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="left" variant="caption">
                                Today
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar alt="User 1" src={Avatar3} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography align="left" component="div" variant="subtitle1">
                                David Jones
                            </Typography>
                            <Typography align="left" component="div" variant="subtitle2">
                                Developer
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="left" variant="caption">
                                Yesterday
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar alt="User 1" src={Avatar4} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography align="left" component="div" variant="subtitle1">
                                David Jones
                            </Typography>
                            <Typography align="left" component="div" variant="subtitle2">
                                Developer
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="left" variant="caption">
                                02-05-2021
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
                View all Projects
            </Button>
        </CardActions>
    </MainCard>
);

TeamMembers.propTypes = {
    title: PropTypes.string
};

export default TeamMembers;
