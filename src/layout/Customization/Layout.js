// material-ui
import { useTheme } from '@mui/material/styles';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, useMediaQuery } from '@mui/material';

// project imports
import useConfig from 'hooks/useConfig';
import LAYOUT_CONST from 'constant';
import SubCard from 'ui-component/cards/SubCard';

const Layout = () => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
    const { layout, drawerType, navType, rtlLayout, onChangeMenuType, onChangeLayout, onChangeDrawer, onChangeRTL } = useConfig();

    return (
        <SubCard title="Layout">
            <FormControl component="fieldset">
                <FormLabel component="legend">Mode</FormLabel>
                <RadioGroup
                    row
                    aria-label="layout"
                    value={navType}
                    onChange={(e) => onChangeMenuType(e.target.value)}
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel
                        value="light"
                        control={<Radio />}
                        label="Light"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                    <FormControlLabel
                        value="dark"
                        control={<Radio />}
                        label="Dark"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">Menu Orientation</FormLabel>
                <RadioGroup
                    aria-label="orientaion"
                    value={layout}
                    onChange={(e) => onChangeLayout(e.target.value)}
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel
                        value="vertical"
                        control={<Radio />}
                        label="Vertical"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                    <FormControlLabel
                        value="horizontal"
                        control={<Radio />}
                        label="Horizontal"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                </RadioGroup>
            </FormControl>

            {layout === LAYOUT_CONST.VERTICAL_LAYOUT && !matchDownMD && (
                <FormControl component="fieldset" sx={{ mt: 2 }}>
                    <FormLabel component="legend">Drawer</FormLabel>
                    <RadioGroup
                        aria-label="drawer"
                        value={drawerType}
                        onChange={(e) => onChangeDrawer(e.target.value)}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel
                            value="default"
                            control={<Radio />}
                            label="Default"
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                            }}
                        />
                        <FormControlLabel
                            value="mini-drawer"
                            control={<Radio />}
                            label="Mini-Drawer"
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                            }}
                        />
                    </RadioGroup>
                </FormControl>
            )}

            <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">Direction</FormLabel>
                <FormControlLabel
                    control={
                        <Switch
                            checked={rtlLayout}
                            onChange={(event) => onChangeRTL(event.target.checked)}
                            inputProps={{ 'aria-label': 'controlled-direction' }}
                        />
                    }
                    label="RTL"
                />
            </FormControl>
        </SubCard>
    );
};

export default Layout;
