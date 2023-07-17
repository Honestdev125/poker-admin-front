// material-ui
import { styled } from '@mui/material/styles';
import { ButtonBase, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// assets
import banner from 'assets/images/profile/profile-back-10.png';

// styled constant
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

// ===============================|| GRID - COMPLEX ||=============================== //

export default function ComplexGrid() {
    return (
        <SubCard content={false} sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: { xs: '100%', sm: 200 } }}>
                        <Img alt="complex" src={banner} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Standard license
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2" color="error">
                                Remove
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            $19.00
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </SubCard>
    );
}
