import React from 'react';

// material-ui
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

// assets
import FormatBoldIcon from '@mui/icons-material/FormatBoldTwoTone';
import FormatItalicIcon from '@mui/icons-material/FormatItalicTwoTone';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlinedTwoTone';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFillTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownTwoTone';

// ============================|| UI TOGGLE BUTTON - MULTIPLE ||============================ //

export default function ToggleButtonsMultiple() {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <Grid container justifyContent="center">
            <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting" color="secondary">
                <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon />
                </ToggleButton>
                <ToggleButton value="color" aria-label="color" disabled>
                    <FormatColorFillIcon />
                    <ArrowDropDownIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    );
}
