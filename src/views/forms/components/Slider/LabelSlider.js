import React from 'react';
import { Grid, Slider, Typography } from '@mui/material';

// ==============================|| LABEL SLIDER ||============================== //

export default function LabelSlider() {
    const [value, setValue] = React.useState(50);
    const handleChange = (even, newValue) => {
        setValue(newValue);
    };

    const [valueSecondary, setValueSecondary] = React.useState(78);
    const handleChangeSecondary = (event, newValue) => {
        setValueSecondary(newValue);
    };

    return (
        <Grid container direction="column">
            <Grid item xs={12} container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <Typography variant="caption">Progress</Typography>
                </Grid>
                <Grid item xs>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <Typography variant="h6">{value}%</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <Typography variant="caption">Progress</Typography>
                </Grid>
                <Grid item xs>
                    <Slider value={valueSecondary} color="secondary" onChange={handleChangeSecondary} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <Typography variant="h6">{valueSecondary}%</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
