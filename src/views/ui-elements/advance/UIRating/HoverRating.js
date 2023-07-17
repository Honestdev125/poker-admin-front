import React from 'react';

// project imports

// material-ui
import { Box, Grid, Rating } from '@mui/material';

// rating labels
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Normal',
    3: 'Normal+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+'
};

// ===============================|| UI RATING - HOVER ||=============================== //

export default function HoverRating() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <div>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                    />
                </Grid>
                <Grid item>{value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}</Grid>
            </Grid>
        </div>
    );
}
