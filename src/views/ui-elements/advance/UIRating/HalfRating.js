// material-ui
import { Grid, Rating } from '@mui/material';

// ===============================|| UI RATING - HALF ||=============================== //

export default function HalfRating() {
    return (
        <>
            <Grid container justifyContent="center" sx={{ mb: 1 }}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Grid>
            <Grid container justifyContent="center">
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Grid>
        </>
    );
}
