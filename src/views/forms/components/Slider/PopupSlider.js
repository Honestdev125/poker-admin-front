// material-ui
import { Grid, Slider, Typography } from '@mui/material';

// set temperature
function valueText(value) {
    return `${value}°C`;
}

// ==============================|| POPUP SLIDER ||============================== //

export default function PopupSlider() {
    return (
        <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
            <Grid item>
                <Typography variant="h6" color="primary">
                    15K
                </Typography>
            </Grid>
            <Grid item xs>
                <Slider defaultValue={40} getAriaValueText={valueText} valueLabelDisplay="on" min={15} max={60} />
            </Grid>
            <Grid item>
                <Typography variant="h6" color="primary">
                    60K
                </Typography>
            </Grid>
        </Grid>
    );
}
