// material-ui
import { Card, CardContent, Grid, Typography } from '@mui/material';

// assets
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';

// ===========================|| WIDGET STATISTICS - WEATHER CARD ||=========================== //

const WeatherCard = () => (
    <Card>
        <CardContent
            sx={{
                padding: '0px !important',
                '& svg': {
                    width: 40,
                    height: 40
                }
            }}
        >
            <Grid container alignItems="center" spacing={0}>
                <Grid item xs={6} sx={{ p: 3 }}>
                    <Typography variant="h2" align="center">
                        19<sup>°</sup>
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                        Sunny
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ bgcolor: 'primary.dark', p: 3 }}>
                    <Typography variant="subtitle2" align="center">
                        <WbSunnyTwoToneIcon sx={{ color: '#fff' }} />
                    </Typography>
                    <Typography variant="subtitle2" align="center" sx={{ color: '#fff' }}>
                        New York , NY
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default WeatherCard;
