// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';

// project imports
import Item from './GridItem';

// ===============================|| GRID - AUTO ||=============================== //

export default function AutoGrid() {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item theme={theme}>xs</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item theme={theme}>xs=6</Item>
                </Grid>
                <Grid item xs>
                    <Item theme={theme}>xs</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
