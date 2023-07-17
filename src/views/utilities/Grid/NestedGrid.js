// material-ui
import { Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import Item from './GridItem';

function FormRow() {
    const theme = useTheme();
    return (
        <>
            <Grid item xs={4}>
                <Item theme={theme}>Item</Item>
            </Grid>
            <Grid item xs={4}>
                <Item theme={theme}>Item</Item>
            </Grid>
            <Grid item xs={4}>
                <Item theme={theme}>Item</Item>
            </Grid>
        </>
    );
}

// ===============================|| GRID - NESTED ||=============================== //

export default function NestedGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </Box>
    );
}
