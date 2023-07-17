import PropTypes from 'prop-types';

// material-ui
import { FormControlLabel, Radio } from '@mui/material';

// ==============================|| CALENDAR COLOR PALETTE ||============================== //

const ColorPalette = ({ color, label, value }) => (
    <FormControlLabel
        value={value}
        control={<Radio sx={{ color, '&.Mui-checked': { color } }} />}
        label={label || ''}
        sx={{ pr: label ? 1 : 0 }}
    />
);

ColorPalette.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string
};

export default ColorPalette;
