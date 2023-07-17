import React from 'react';

// material-ui
import Slider from '@mui/material/Slider';

// ==============================|| DISABLED SLIDER ||============================== //

export default function DisableSlider() {
    const [value, setValue] = React.useState(35);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Slider disabled value={value} onChange={handleChange} aria-labelledby="continuous-slider" />;
}
