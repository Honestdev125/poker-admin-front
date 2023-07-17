import PropTypes from 'prop-types';
import { cloneElement } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Chip, Divider, Grid, IconButton, Typography, useScrollTrigger } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// assets
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import NotInterestedTwoToneIcon from '@mui/icons-material/NotInterestedTwoTone';

const avatarImage = require.context('assets/images/users', true);

// sticky details card

function ElevationScroll({ children, window }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 130,
        target: window || undefined
    });

    return cloneElement(children, {
        style: {
            position: trigger ? 'fixed' : 'relative',
            top: trigger ? 83 : 0,
            width: trigger ? 318 : '100%'
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node,
    window: PropTypes.object
};

// ==============================|| CONTACT CARD/LIST USER DETAILS ||============================== //

const UserDetails = ({ user, onClose, onEditClick, ...others }) => {
    const theme = useTheme();

    const avatarProfile = user.avatar && avatarImage(`./${user.avatar}`);

    return (
        <ElevationScroll {...others}>
            <SubCard
                sx={{
                    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
                    width: '100%',
                    maxWidth: 342
                }}
            >
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Avatar alt={user.name} src={avatarProfile} sx={{ width: 64, height: 64 }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" component="div" sx={{ fontSize: '1rem' }}>
                                            {user.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Chip
                                            label="Work"
                                            sx={{
                                                color: theme.palette.primary.main,
                                                bgcolor:
                                                    theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.primary.light
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={onClose} size="large">
                                    <HighlightOffTwoToneIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Button variant="outlined" fullWidth startIcon={<ChatBubbleTwoToneIcon />} onClick={onEditClick}>
                                    Edit
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="outlined" color="secondary" fullWidth startIcon={<NotInterestedTwoToneIcon />}>
                                    Block
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <BusinessTwoToneIcon sx={{ verticalAlign: 'sub', fontSize: '1.125rem', mr: 0.625 }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body2">{user.company}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <WorkTwoToneIcon sx={{ verticalAlign: 'sub', fontSize: '1.125rem', mr: 0.625 }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body2">{user.role}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <MailTwoToneIcon sx={{ verticalAlign: 'sub', fontSize: '1.125rem', mr: 0.625 }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body2" sx={{ mb: 0.625 }}>
                                    {user.work_email}
                                    <Typography component="span" color="primary">
                                        work
                                    </Typography>
                                </Typography>
                                <Typography variant="body2">
                                    {user.personal_email}
                                    <Typography component="span" color="secondary">
                                        Personal
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <CallTwoToneIcon sx={{ verticalAlign: 'sub', fontSize: '1.125rem', mr: 0.625 }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body2" sx={{ mb: 0.625 }}>
                                    {user.work_phone}{' '}
                                    <Typography component="span" color="primary">
                                        work
                                    </Typography>
                                </Typography>
                                <Typography variant="body2">
                                    {user.personal_phone}{' '}
                                    <Typography component="span" color="secondary">
                                        Personal
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <PinDropTwoToneIcon sx={{ verticalAlign: 'sub', fontSize: '1.125rem', mr: 0.625 }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body2">{user.location}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <CakeTwoToneIcon sx={{ verticalAlign: 'sub', fontSize: '1.125rem', mr: 0.625 }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body2">November 30, 1997</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <InfoTwoToneIcon sx={{ verticalAlign: 'sub', fontSize: '1.125rem', mr: 0.625 }} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body2" sx={{ mb: 0.625 }}>
                                    {user.birthdayText}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </SubCard>
        </ElevationScroll>
    );
};

UserDetails.propTypes = {
    user: PropTypes.object,
    onClose: PropTypes.func,
    onEditClick: PropTypes.func
};

export default UserDetails;
