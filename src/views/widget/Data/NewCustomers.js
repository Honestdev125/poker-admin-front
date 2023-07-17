import PropTypes from 'prop-types';

// material-ui
import { Avatar, CardContent, Grid, Typography } from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';
import Avatar4 from 'assets/images/users/avatar-4.png';
import Avatar5 from 'assets/images/users/avatar-5.png';

const activeSX = {
    width: 16,
    height: 16,
    verticalAlign: 'sub',
    color: 'success.main'
};

const iconSX = {
    fontSize: '0.875rem',
    mr: 0.25,
    verticalAlign: 'sub'
};

// ===========================|| DATA WIDGET - NEW CUSTOMERS CARD ||=========================== //

const NewCustomers = ({ title }) => (
    <MainCard title={title} content={false}>
        <PerfectScrollbar style={{ height: 370 }}>
            <CardContent>
                <Grid container spacing={gridSpacing} alignItems="center">
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar1} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    Alex Thompson
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            Cheers!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" component="div" variant="caption">
                                            <FiberManualRecordIcon sx={activeSX} />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar2} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    John Doue
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            stay hungry stay foolish!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <FiberManualRecordIcon sx={activeSX} />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar3} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    Alex Thompson
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            Cheers!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <WatchLaterTwoToneIcon sx={iconSX} />
                                            30 min ago
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar4} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    John Doue
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            stay hungry stay foolish!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <WatchLaterTwoToneIcon sx={iconSX} />
                                            10 min ago
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar5} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    Shirley Hoe
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            Cheers!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <WatchLaterTwoToneIcon sx={iconSX} />
                                            30 min ago
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar1} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    Alex Thompson
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            Cheers!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <FiberManualRecordIcon sx={activeSX} />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar2} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    John Doue
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            stay hungry stay foolish!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <FiberManualRecordIcon sx={activeSX} />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar3} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    Alex Thompson
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            Cheers!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <WatchLaterTwoToneIcon sx={iconSX} />
                                            30 min ago
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar4} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    John Doue
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            stay hungry stay foolish!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <WatchLaterTwoToneIcon sx={iconSX} />
                                            10 min ago
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar alt="coverimage" src={Avatar5} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    Shirley Hoe
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            Cheers!
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            <WatchLaterTwoToneIcon sx={iconSX} />
                                            30 min ago
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </PerfectScrollbar>
    </MainCard>
);

NewCustomers.propTypes = {
    title: PropTypes.string
};

export default NewCustomers;
