import React from 'react';

// material-ui
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

// assets
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeftTwoTone';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenterTwoTone';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRightTwoTone';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustifyTwoTone';

// ============================|| UI TOGGLE BUTTON - EXCLUSIVE ||============================ //

export default function ExclusiveToggleButtons() {
    const [alignment, setAlignment] = React.useState('left');
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Grid container justifyContent="center">
            <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment" color="primary">
                <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                    <FormatAlignJustifyIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    );
}
