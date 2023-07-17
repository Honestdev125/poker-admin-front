import React from 'react';

// material-ui
import { Grid, Rating, Typography } from '@mui/material';

// ===============================|| UI RATING - SIMPLE ||=============================== //

export default function SimpleRating() {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography component="legend">Controlled</Typography>
                </Grid>
                <Grid item>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography component="legend">Read only</Typography>
                </Grid>
                <Grid item>
                    <Rating name="read-only" value={value} readOnly />
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography component="legend">Disabled</Typography>
                </Grid>
                <Grid item>
                    <Rating name="disabled" value={value} disabled />
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography component="legend">Pristine</Typography>
                </Grid>
                <Grid item>
                    <Rating name="pristine" value={null} />
                </Grid>
            </Grid>
        </>
    );
}
