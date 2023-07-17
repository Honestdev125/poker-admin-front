import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

// project imports
import useConfig from 'hooks/useConfig';
import SubCard from 'ui-component/cards/SubCard';

const FontFamily = () => {
    const theme = useTheme();
    const { fontFamily, onChangeFontFamily } = useConfig();

    let initialFont;
    switch (fontFamily) {
        case `'Inter', sans-serif`:
            initialFont = 'Inter';
            break;
        case `'Poppins', sans-serif`:
            initialFont = 'Poppins';
            break;
        case `'Roboto', sans-serif`:
        default:
            initialFont = 'Roboto';
            break;
    }

    // state - font family
    const [font, setFont] = useState(initialFont);

    const handleFont = (event) => {
        setFont(event.target.value);
        onChangeFontFamily(event.target.value);
    };

    return (
        <SubCard title="Font Family">
            <FormControl>
                <RadioGroup aria-label="font-family" value={font} onChange={handleFont} name="row-radio-buttons-group">
                    <FormControlLabel
                        value="Roboto"
                        control={<Radio />}
                        label="Roboto"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                    <FormControlLabel
                        value="Poppins"
                        control={<Radio />}
                        label="Poppins"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                    <FormControlLabel
                        value="Inter"
                        control={<Radio />}
                        label="Inter"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                </RadioGroup>
            </FormControl>
        </SubCard>
    );
};

export default FontFamily;
