import React from 'react';

// material-ui
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

// assets
import ViewListIcon from '@mui/icons-material/ViewListTwoTone';
import ViewModuleIcon from '@mui/icons-material/ViewModuleTwoTone';
import ViewQuiltIcon from '@mui/icons-material/ViewQuiltTwoTone';

// ============================|| UI TOGGLE BUTTON - VERTICAL ||============================ //

export default function VerticalToggleButtons() {
    const [view, setView] = React.useState('list');
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <Grid container justifyContent="center">
            <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                <ToggleButton value="list" aria-label="list">
                    <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                    <ViewModuleIcon />
                </ToggleButton>
                <ToggleButton value="quilt" aria-label="quilt">
                    <ViewQuiltIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    );
}
