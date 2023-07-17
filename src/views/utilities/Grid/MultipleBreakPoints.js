// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';

// project imports
import Item from './GridItem';

// ===============================|| GRID - MULTIPLE BREAKPOINTS ||=============================== //

export default function MultipleBreakPoints() {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Item theme={theme}>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item theme={theme}>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item theme={theme}>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Item theme={theme}>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
