// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, useMediaQuery } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| WIDGET STATISTICS - ICON GRID CARD ||=========================== //

const IconGridCard = ({ content }) => {
    const theme = useTheme();
    const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

    const blockSX = {
        p: 2.5,
        borderLeft: '1px solid ',
        borderBottom: '1px solid ',
        borderLeftColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[200],
        borderBottomColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[200]
    };

    return (
        <Grid container alignItems="center" spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard
                    sx={{
                        '& >div': {
                            padding: '0px !important'
                        },
                        '& svg': {
                            width: 45,
                            height: 45,
                            color: theme.palette.secondary.main,
                            borderRadius: '14px',
                            p: 1.25,
                            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light
                        }
                    }}
                >
                    <Grid container alignItems="center" spacing={0}>
                        {content.map((item, index) => (
                            <Grid key={index} item xs={12} sm={6} sx={blockSX}>
                                <Grid container alignItems="center" spacing={1} justifyContent={matchDownXs ? 'space-between' : 'center'}>
                                    <Grid item>{item.icon}</Grid>
                                    <Grid item sm zeroMinWidth>
                                        <Typography variant="h5" align="center">
                                            {item.count}
                                        </Typography>
                                        <Typography variant="subtitle2" align="center">
                                            {item.date}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default IconGridCard;
