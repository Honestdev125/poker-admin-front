import { useState } from 'react';

// material-ui
import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// third-party
import { PatternFormat } from 'react-number-format';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import LinkIcon from '@mui/icons-material/Link';

// ==============================|| PLUGIN - MASK INPUT ||============================== //

const MaskPage = () => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    const [time, setTime] = useState(new Date());
    const [datetime, setDatetime] = useState(new Date());

    return (
        <MainCard
            title="Mask"
            secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://www.npmjs.com/package/react-number-format" />}
        >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={6}>
                        <SubCard title="Date">
                            <Grid container alignItems="center" spacing={3}>
                                <Grid item xs={12}>
                                    <DatePicker
                                        label="Insert Date 1"
                                        value={date1}
                                        onChange={(newValue) => setDate1(newValue)}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <DatePicker
                                        label="Insert Date 2"
                                        value={date2}
                                        onChange={(newValue) => setDate2(newValue)}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                        inputFormat="mm-dd-yyyy"
                                        mask="__-__-____"
                                    />
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SubCard title="Time">
                            <Grid container alignItems="center" spacing={3}>
                                <Grid item xs={12}>
                                    <TimePicker
                                        ampm={false}
                                        openTo="hours"
                                        views={['hours', 'minutes', 'seconds']}
                                        inputFormat="HH:mm:ss"
                                        mask="__:__:__"
                                        label="Time"
                                        value={time}
                                        onChange={(newValue) => {
                                            setTime(newValue);
                                        }}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <MobileDateTimePicker
                                        value={datetime}
                                        onChange={(newValue) => {
                                            setDatetime(newValue);
                                        }}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SubCard title="Phone no.">
                            <Grid container alignItems="center" spacing={3}>
                                <Grid item xs={12}>
                                    <PatternFormat
                                        format="+1 (###) ###-####"
                                        mask="_"
                                        fullWidth
                                        customInput={TextField}
                                        label="Phone Number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <PatternFormat
                                        format="+91 #### ###-####"
                                        mask="_"
                                        fullWidth
                                        customInput={TextField}
                                        label="Contact Number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <PatternFormat
                                        format="(##) ####-#####"
                                        mask="_"
                                        fullWidth
                                        customInput={TextField}
                                        label="Tel. with Code Area"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <PatternFormat
                                        format="(###) ### #####"
                                        mask="_"
                                        fullWidth
                                        customInput={TextField}
                                        label="US Telephone"
                                    />
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SubCard title="Network">
                            <Grid container alignItems="center" spacing={3}>
                                <Grid item xs={12}>
                                    <PatternFormat format="###.###.###.###" mask="_" fullWidth customInput={TextField} label="IP Address" />
                                </Grid>
                                <Grid item xs={12}>
                                    <PatternFormat format="####.####.####.####" mask="_" fullWidth customInput={TextField} label="IPV4" />
                                </Grid>
                                <Grid item xs={12}>
                                    <PatternFormat
                                        format="####:####:####:#:###:####:####:####"
                                        mask="_"
                                        fullWidth
                                        customInput={TextField}
                                        label="IPV6"
                                    />
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </LocalizationProvider>
        </MainCard>
    );
};

export default MaskPage;
