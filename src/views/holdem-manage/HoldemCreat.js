import { useState } from 'react';

// material-ui
import { Grid, TextField, MenuItem, Button, Divider, Switch } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// third-party

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import LinkIcon from '@mui/icons-material/Link';
import { useNavigate } from 'react-router-dom';

// ==============================|| PLUGIN - MASK INPUT ||============================== //
const currencies2 = [
    {
        value: 'Texas Holdem',
        label: 'Texas Holdem'
    }
];
const currencies1 = [
    {
        value: 'Everyone',
        label: 'Everyone'
    },
    {
        value: 'Friends Only',
        label: 'Friends Only'
    },
    {
        value: 'Invite Only',
        label: 'Invite Only'
    }
];

const HoldemCreate = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [currency1, setCurrency1] = useState('');
    const [currency2, setCurrency2] = useState('');
    const handleChange1 = (event) => {
        setCurrency1(event.target.value);
    };
    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
    };
    const clickCancel = () => {
        navigate(`/holdemlist`);
    };

    return (
        <MainCard
            title="Create New Texas Holdem"
            secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://www.npmjs.com/package/react-number-format" />}
        >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <Grid item xs={12} display="flex" justifyContent="space-around" alignItems="baseline">
                            <Grid container item alignItems="center" spacing={3} xs={5}>
                                <Grid item xs={12} mt={4}>
                                    <TextField fullWidth label="Table Name" />
                                </Grid>
                                <Grid item xs={12} mt={0.5}>
                                    <TextField
                                        id="outlined-select-language"
                                        select
                                        fullWidth
                                        label="Game Type"
                                        value={currency2}
                                        onChange={handleChange2}
                                    >
                                        {currencies2.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} mt={0.5}>
                                    <TextField fullWidth label="Buy-in" defaultValue="" type="number" />
                                </Grid>{' '}
                                <Grid item xs={12} mt={0.5}>
                                    <TextField fullWidth label="Small Blind" defaultValue="" type="number" />
                                </Grid>{' '}
                                <Grid item xs={12} mt={0.5}>
                                    <span style={{ marginRight: '120px' }}>Auto Start</span>
                                    <Switch
                                        defaultChecked={false}
                                        sx={{
                                            color: theme.palette.success.dark,
                                            '& .Mui-checked': { color: `${theme.palette.success.dark} !important` },
                                            '& .Mui-checked+.MuiSwitch-track': {
                                                bgcolor: `${theme.palette.success.light} !important`
                                            }
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" item spacing={3} xs={5}>
                                <Grid item xs={12} mt={4}>
                                    <TextField fullWidth label="Number of Players" defaultValue="" type="number" />
                                </Grid>
                                <Grid item xs={12} mt={0.5}>
                                    <TextField
                                        id="outlined-select-language"
                                        select
                                        fullWidth
                                        label="Table Visibility"
                                        value={currency1}
                                        onChange={handleChange1}
                                    >
                                        {currencies1.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} mt={0.5}>
                                    <TextField fullWidth label="Rake Percentage" defaultValue="" type="number" />
                                </Grid>
                                <Grid item xs={12} mt={0.5}>
                                    <TextField fullWidth label="Big Blind" defaultValue="" type="number" />
                                </Grid>
                                {/* <Grid item xs={12} mt={0.5}>
                                    <span style={{ marginRight: '100px' }}>Private Table</span>
                                    <Switch
                                        defaultChecked
                                        sx={{
                                            color: theme.palette.success.dark,
                                            '& .Mui-checked': { color: `${theme.palette.success.dark} !important` },
                                            '& .Mui-checked+.MuiSwitch-track': {
                                                bgcolor: `${theme.palette.success.light} !important`
                                            }
                                        }}
                                    />
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} mt={4}>
                            <Divider />
                            <Grid display="flex">
                                <Grid item xs={12} mt={2} display="flex" justifyContent="flex-end">
                                    <Button color="primary" variant="contained">
                                        Create
                                    </Button>
                                    <Button
                                        sx={{ marginLeft: '30px', marginRight: '100px' }}
                                        color="grey"
                                        variant="contained"
                                        onClick={clickCancel}
                                    >
                                        Back
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </LocalizationProvider>
        </MainCard>
    );
};

export default HoldemCreate;
