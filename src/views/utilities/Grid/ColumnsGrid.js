// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';

// project imports
import Item from './GridItem';

// ===============================|| GRID - COLUMN ||=============================== //

export default function ColumnsGrid() {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Item theme={theme}>xs=8</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item theme={theme}>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
