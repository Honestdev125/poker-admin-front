import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Divider, FormControlLabel, Grid, IconButton, MenuItem, Switch, TextField, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';

const deviceStateSX = {
    display: 'inline-flex',
    alignItems: 'center',
    '& >svg': {
        width: 12,
        height: 12,
        mr: 0.5
    }
};

// select options
const currencies = [
    {
        value: 'Washington',
        label: 'Washington'
    },
    {
        value: 'India',
        label: 'India'
    },
    {
        value: 'Africa',
        label: 'Africa'
    },
    {
        value: 'New-York',
        label: 'New York'
    },
    {
        value: 'Malaysia',
        label: 'Malaysia'
    }
];

const experiences = [
    {
        value: 'Startup',
        label: 'Startup'
    },
    {
        value: '2-year',
        label: '2 year'
    },
    {
        value: '3-year',
        label: '3 year'
    },
    {
        value: '4-year',
        label: '4 year'
    },
    {
        value: '5-year',
        label: '5 year'
    }
];

// ==============================|| PROFILE 1 - MY ACCOUNT ||============================== //

const MyAccount = () => {
    const theme = useTheme();

    const [currency, setCurrency] = useState('Washington');
    const handleChange1 = (event) => {
        setCurrency(event.target.value);
    };

    const [experience, setExperience] = useState('Startup');
    const handleChange2 = (event) => {
        setExperience(event.target.value);
    };

    const [state1, setState1] = useState({
        checkedB: false
    });
    const [state2, setState2] = useState({
        checkedB: false
    });
    const [state3, setState3] = useState({
        checkedB: true
    });
    const handleSwitchChange1 = (event) => {
        setState1({ ...state1, [event.target.name]: event.target.checked });
    };
    const handleSwitchChange2 = (event) => {
        setState2({ ...state2, [event.target.name]: event.target.checked });
    };
    const handleSwitchChange3 = (event) => {
        setState3({ ...state3, [event.target.name]: event.target.checked });
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="General Settings">
                    <form noValidate autoComplete="off">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="outlined-basic5"
                                    fullWidth
                                    label="Username"
                                    helperText="Your Profile URL: https://pc.com/Ashoka_Tano_16"
                                    defaultValue="Asoka_Tana_16"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic6" fullWidth label="Account Email" defaultValue="demo@sample.com" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="outlined-select-language"
                                    sx={{ width: '500px' }}
                                    select
                                    fullWidth
                                    label="Language"
                                    value={currency}
                                    onChange={handleChange1}
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="outlined-select-experience1"
                                    select
                                    fullWidth
                                    label="Signing Using"
                                    value={experience}
                                    onChange={handleChange2}
                                >
                                    {experiences.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </form>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Advance Settings">
                    <Grid container direction="column" spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                                Secure Browsing
                            </Typography>
                            <FormControlLabel
                                control={
                                    <Switch checked={state1.checkedB} onChange={handleSwitchChange1} name="checkedB" color="primary" />
                                }
                                label="Browsing Securely ( https ) when it's necessary"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                                Login Notifications
                            </Typography>
                            <FormControlLabel
                                control={
                                    <Switch checked={state2.checkedB} onChange={handleSwitchChange2} name="checkedB" color="primary" />
                                }
                                label="Notify when login attempted from other place"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                                Login Approvals
                            </Typography>
                            <FormControlLabel
                                control={
                                    <Switch checked={state3.checkedB} onChange={handleSwitchChange3} name="checkedB" color="primary" />
                                }
                                label="Approvals is not required when login from unrecognized devices."
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                                Recognized Devices
                            </Typography>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item>
                                            <DesktopWindowsTwoToneIcon sx={{ fontSize: '1.15rem' }} />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography variant="subtitle1">
                                                Cent Desktop{' '}
                                                <Typography component="span" variant="caption">
                                                    | 4351 Deans Lane, Chelmsford
                                                </Typography>{' '}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                sx={{ ...deviceStateSX, color: 'success.dark' }}
                                                color="success"
                                                variant="subtitle2"
                                            >
                                                <FiberManualRecordIcon />
                                                Current Active
                                                <IconButton size="large" aria-label="close this session">
                                                    <HighlightOffTwoToneIcon sx={{ fontSize: '1.15rem' }} />
                                                </IconButton>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item>
                                            <SmartphoneTwoToneIcon sx={{ fontSize: '1.15rem' }} />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography variant="subtitle1">
                                                Imho Tablet{' '}
                                                <Typography component="span" variant="caption">
                                                    | 4185 Michigan Avenue
                                                </Typography>{' '}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography sx={{ ...deviceStateSX, color: 'grey.400' }} variant="caption">
                                                <FiberManualRecordIcon />
                                                Active 5 days ago
                                                <IconButton size="large" aria-label="close this session">
                                                    <HighlightOffTwoToneIcon sx={{ fontSize: '1.15rem' }} />
                                                </IconButton>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item>
                                            <PhoneIphoneTwoToneIcon sx={{ fontSize: '1.15rem' }} />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography variant="subtitle1">
                                                Albs Mobile{' '}
                                                <Typography component="span" variant="caption">
                                                    | 3462 Fairfax Drive, Montcalm
                                                </Typography>{' '}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography sx={{ ...deviceStateSX, color: 'grey.400' }} variant="subtitle2">
                                                <FiberManualRecordIcon />
                                                Active 1 month ago
                                                <IconButton size="large" aria-label="close this session">
                                                    <HighlightOffTwoToneIcon sx={{ fontSize: '1.15rem' }} />
                                                </IconButton>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                                Active Sessions
                            </Typography>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item>
                                            <DesktopWindowsTwoToneIcon sx={{ fontSize: '1.15rem', color: 'success.dark' }} />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography variant="subtitle1">
                                                Ceto Desktop{' '}
                                                <Typography component="span" variant="caption">
                                                    | 4351 Deans Lane, Chelmsford
                                                </Typography>{' '}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="text" sx={{ color: theme.palette.error.main }}>
                                                Logout
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item>
                                            <SmartphoneTwoToneIcon sx={{ fontSize: '1.15rem', color: 'success.dark' }} />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography variant="subtitle1">
                                                Moon Tablet{' '}
                                                <Typography component="span" variant="caption">
                                                    | 4185 Michigan Avenue
                                                </Typography>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="text" sx={{ color: theme.palette.error.main }}>
                                                Logout
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ mt: 2 }} />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 3 }}>
                        <Grid spacing={2} container justifyContent="flex-end">
                            <Grid item>
                                <AnimateButton>
                                    <Button variant="contained">Update Profile</Button>
                                </AnimateButton>
                            </Grid>
                            <Grid item>
                                <Button sx={{ color: theme.palette.error.main }}>Clear</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    );
};

export default MyAccount;
