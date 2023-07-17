import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

// assets
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeftTwoTone';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenterTwoTone';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRightTwoTone';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustifyTwoTone';

// ============================|| UI TOGGLE BUTTON - SIZE ||============================ //

export default function ToggleButtonSizes() {
    const theme = useTheme();

    const [alignment, setAlignment] = React.useState('left');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
                <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                    <ToggleButton value="left" aria-label="left toggle button">
                        <FormatAlignLeftIcon fontSize="small" />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="center toggle button">
                        <FormatAlignCenterIcon fontSize="small" />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right toggle button">
                        <FormatAlignRightIcon fontSize="small" />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justify toggle button">
                        <FormatAlignJustifyIcon fontSize="small" />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item>
                <ToggleButtonGroup
                    size="medium"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    color="secondary"
                    sx={{
                        color: theme.palette.secondary.dark,
                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.secondary.light
                    }}
                >
                    <ToggleButton value="left" aria-label="left toggle button">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="center toggle button">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right toggle button">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justify toggle button">
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item>
                <ToggleButtonGroup
                    size="large"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    color="primary"
                    sx={{
                        color: theme.palette.primary.dark,
                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.primary.light
                    }}
                >
                    <ToggleButton value="left" aria-label="left toggle button">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="center toggle button">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right toggle button">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justify toggle button">
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    );
}
