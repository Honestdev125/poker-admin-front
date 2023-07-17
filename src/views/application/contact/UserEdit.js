import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Autocomplete,
    Avatar,
    Button,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useScrollTrigger
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import User1 from 'assets/images/users/avatar-1.png';

// assets
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';

const avatarImage = require.context('assets/images/users', true);

const jobTypes = [
    { label: 'Work', id: 1 },
    { label: 'Personal', id: 2 }
];

// sticky edit card

function ElevationScroll({ children, window }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 130,
        target: window || undefined
    });

    return React.cloneElement(children, {
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

// ==============================|| CONTACT CARD/LIST USER EDIT ||============================== //

const UserEdit = ({ user, onCancel, onSave, ...others }) => {
    const theme = useTheme();

    // save user to local state to update details and submit letter
    const [profile, setProfile] = useState(user);
    useEffect(() => {
        setProfile(user);
    }, [user]);

    let avatarProfile = User1;
    if (profile) {
        avatarProfile = profile.avatar && avatarImage(`./${profile.avatar}`);
    }

    return (
        <ElevationScroll {...others}>
            <SubCard
                sx={{
                    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
                    width: '100%',
                    maxWidth: 342
                }}
                content={false}
            >
                <PerfectScrollbar style={{ height: 'calc(100vh - 83px)', overflowX: 'hidden' }}>
                    <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Avatar alt="User 3" src={avatarProfile} sx={{ width: 64, height: 64 }} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <label htmlFor="containedButtonFile">
                                                <input
                                                    accept="image/*"
                                                    style={{
                                                        opacity: 0,
                                                        position: 'fixed',
                                                        zIndex: 1,
                                                        padding: 0.5,
                                                        cursor: 'pointer'
                                                    }}
                                                    id="containedButtonFile"
                                                    multiple
                                                    type="file"
                                                />
                                                <Button variant="outlined" size="small" startIcon={<UploadTwoToneIcon />}>
                                                    Upload
                                                </Button>
                                            </label>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="caption">Image size should be 125kb Max.</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={() => onCancel(profile)} size="large">
                                        <HighlightOffTwoToneIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Name</InputLabel>
                                <OutlinedInput
                                    value={profile.name}
                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                    type="text"
                                    label="Name"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <BusinessTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Company</InputLabel>
                                <OutlinedInput
                                    value={profile.company}
                                    onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                                    type="text"
                                    label="Company"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <BusinessTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Job Title</InputLabel>
                                <OutlinedInput
                                    value={profile.role}
                                    onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                                    type="text"
                                    label="Job Title"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <WorkTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                options={jobTypes}
                                getOptionLabel={(option) => option.label}
                                defaultValue={[jobTypes[0]]}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Email</InputLabel>
                                <OutlinedInput
                                    value={profile.work_email}
                                    onChange={(e) => setProfile({ ...profile, work_email: e.target.value })}
                                    type="text"
                                    label="Email"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <MailTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                options={jobTypes}
                                getOptionLabel={(option) => option.label}
                                defaultValue={[jobTypes[1]]}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Email</InputLabel>
                                <OutlinedInput
                                    value={profile.personal_email}
                                    onChange={(e) => setProfile({ ...profile, personal_email: e.target.value })}
                                    type="text"
                                    label="Email"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <MailTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="text" startIcon={<ControlPointIcon />}>
                                Add New Email
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                options={jobTypes}
                                getOptionLabel={(option) => option.label}
                                defaultValue={[jobTypes[0]]}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Phone Number</InputLabel>
                                <OutlinedInput
                                    value={profile.work_phone}
                                    onChange={(e) => {
                                        setProfile({ ...profile, work_phone: e.target.value });
                                    }}
                                    type="text"
                                    label="Phone Number"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <CallTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                options={jobTypes}
                                getOptionLabel={(option) => option.label}
                                defaultValue={[jobTypes[1]]}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Phone Number</InputLabel>
                                <OutlinedInput
                                    value={profile.personal_phone}
                                    onChange={(e) => {
                                        setProfile({ ...profile, personal_phone: e.target.value });
                                    }}
                                    type="text"
                                    label="Phone Number"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <CallTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="text" startIcon={<ControlPointIcon />}>
                                Add New Phone
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Birthday</InputLabel>
                                <OutlinedInput
                                    defaultValue="November 30, 1997"
                                    type="text"
                                    label="Birthday"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <TodayTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Bio</InputLabel>
                                <OutlinedInput
                                    defaultValue={profile.birthdayText}
                                    onChange={(e) => setProfile({ ...profile, birthdayText: e.target.value })}
                                    type="text"
                                    label="Bio"
                                    multiline
                                    rows={3}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Button variant="contained" fullWidth onClick={() => onSave(profile)}>
                                        Save
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="outlined" fullWidth onClick={() => onCancel(profile)}>
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </SubCard>
        </ElevationScroll>
    );
};

UserEdit.propTypes = {
    user: PropTypes.object,
    onCancel: PropTypes.func,
    onSave: PropTypes.func
};

export default UserEdit;
