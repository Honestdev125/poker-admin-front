import * as React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup } from '@mui/material';

// project imports
import Item from './GridItem';

// ===============================|| GRID - SPACING ||=============================== //

export default function SpacingGrid() {
    const theme = useTheme();
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target?.value));
    };

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item xs={2}>
                            <Item theme={theme}>{value}</Item>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Grid container>
                        <Grid item>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">spacing</FormLabel>
                                <RadioGroup name="spacing" aria-label="spacing" value={spacing.toString()} onChange={handleChange} row>
                                    {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                                        <FormControlLabel
                                            key={value}
                                            value={value.toString()}
                                            control={<Radio />}
                                            label={value.toString()}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
