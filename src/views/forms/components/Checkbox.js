// material-ui
import { useTheme } from '@mui/material/styles';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| CHECKBOX ||============================== //

const UICheckbox = () => {
    const theme = useTheme();

    return (
        <MainCard title="Checkbox" secondary={<SecondaryAction link="https://next.material-ui.com/components/checkboxes/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={4}>
                    <SubCard title="Basic checkboxes">
                        <Grid container spacing={2}>
                            <Grid item>
                                <Checkbox
                                    color="primary"
                                    sx={{
                                        color: theme.palette.success.main,
                                        '&.Mui-checked': { color: theme.palette.success.main }
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Checkbox defaultChecked color="primary" />
                            </Grid>
                            <Grid item>
                                <Checkbox color="secondary" />
                            </Grid>
                            <Grid item>
                                <Checkbox defaultChecked color="secondary" />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="With label">
                        <Grid container spacing={2}>
                            <Grid item>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel disabled control={<Checkbox />} label="Unchecked" />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="Size">
                        <Grid container spacing={2}>
                            <Grid item>
                                <Checkbox defaultChecked color="primary" size="small" />
                            </Grid>
                            <Grid item>
                                <Checkbox defaultChecked color="primary" />
                            </Grid>
                            <Grid item>
                                <Checkbox defaultChecked color="primary" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="With Color">
                        <Grid container spacing={2}>
                            <Grid item>
                                <Checkbox defaultChecked color="primary" />
                            </Grid>
                            <Grid item>
                                <Checkbox defaultChecked color="secondary" sx={{ color: theme.palette.secondary.main }} />
                            </Grid>
                            <Grid item>
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: theme.palette.error.main,
                                        '&.Mui-checked': {
                                            color: theme.palette.error.main
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: theme.palette.warning.dark,
                                        '&.Mui-checked': {
                                            color: theme.palette.warning.main
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Checkbox
                                    defaultChecked
                                    sx={{
                                        color: theme.palette.success.dark,
                                        '&.Mui-checked': {
                                            color: theme.palette.success.main
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UICheckbox;
