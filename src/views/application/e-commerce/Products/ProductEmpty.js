// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, CardMedia, Grid, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import imageEmpty from 'assets/images/e-commerce/empty.svg';
import imageDarkEmpty from 'assets/images/e-commerce/empty-dark.svg';

// ==============================|| NO/EMPTY Product ||============================== //

const ProductEmpty = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Box sx={{ maxWidth: 720, m: '0 auto', textAlign: 'center' }}>
                    <Grid container justifyContent="center" spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={theme.palette.mode === 'dark' ? imageDarkEmpty : imageEmpty}
                                title="Slider5 image"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Typography variant="h1" color="inherit" component="div">
                                        There is no Product
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">Try checking your spelling or use more general terms</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ProductEmpty;
