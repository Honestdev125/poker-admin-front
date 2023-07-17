import React from 'react';

// material-ui
import Slider from '@mui/material/Slider';

// ==============================|| BASIC SLIDER ||============================== //

export default function BasicSlider() {
    const [value, setValue] = React.useState(50);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />;
}
