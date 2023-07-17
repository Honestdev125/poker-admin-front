import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardActions, Checkbox, Divider, FormControlLabel, Grid, Switch, Typography } from '@mui/material';

import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';

const titleSX = {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
        mr: 1
    }
};

// ==============================|| PROFILE 1 - SETTINGS ||============================== //

const Settings = () => {
    const theme = useTheme();

    const [state1, setState1] = useState({
        checkedA: true,
        checkedB: false
    });
    const [state2, setState2] = useState({
        checkedA: true,
        checkedB: false,
        checkedC: true
    });
    const [state3, setState3] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: false
    });
    const handleSwitchChange1 = (event) => {
        setState1({ ...state1, [event.target.name]: event.target.checked });
    };
    const handleSwitchChange2 = (event) => {
        setState2({ ...state2, [event.target.name]: event.target.checked });
    };
    const handleSwitchChange3 = (event) => {
        setState3({ ...state3, [event.target.name]: event.target.checked });
    };

    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: false,
        checkedD: false,
        checkedE: false
    });
    const handleChangeState = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <SubCard title="Email Settings">
            <Grid container direction="column" spacing={3}>
                <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                        <Grid item>
                            <Typography variant="subtitle1">Setup Email Notification</Typography>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state1.checkedA} onChange={handleSwitchChange1} name="checkedA" color="primary" />
                                }
                                label="Email Notification"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state1.checkedB} onChange={handleSwitchChange1} name="checkedB" color="primary" />
                                }
                                label="Send Copy To Personal Email"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" component="span" sx={{ ...titleSX, textTransform: 'uppercase' }}>
                        Activity Related Emails
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                        <Grid item>
                            <Typography variant="subtitle1">When to email?</Typography>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state2.checkedA} onChange={handleSwitchChange2} name="checkedA" color="primary" />
                                }
                                label="have new notifications"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state2.checkedB} onChange={handleSwitchChange2} name="checkedB" color="primary" />
                                }
                                label="you're sent a direct message"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state2.checkedC} onChange={handleSwitchChange2} name="checkedC" color="primary" />
                                }
                                label="Someone adds you as a connection"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                        <Grid item>
                            <Typography variant="subtitle1">When to escalate emails?</Typography>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state3.checkedA} onChange={handleSwitchChange3} name="checkedA" color="primary" />
                                }
                                label="Upon new order"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state3.checkedB} onChange={handleSwitchChange3} name="checkedB" color="primary" />
                                }
                                label="New membership approval"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch checked={state3.checkedC} onChange={handleSwitchChange3} name="checkedC" color="primary" />
                                }
                                label="Member registration"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" component="span" sx={{ ...titleSX, textTransform: 'uppercase' }}>
                        Updates From System Notification
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="column" spacing={0}>
                        <Grid item>
                            <Typography variant="subtitle1">Email you with?</Typography>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedA} onChange={handleChangeState} name="checkedA" color="primary" />}
                                label="News about PCT-themes products and feature updates"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedB} onChange={handleChangeState} name="checkedB" color="primary" />}
                                label="Tips on getting more out of PCT-themes"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedC} onChange={handleChangeState} name="checkedC" color="primary" />}
                                label="Things you missed since you last logged into PCT-themes"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedD} onChange={handleChangeState} name="checkedD" color="primary" />}
                                label="News about products and other services"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedE} onChange={handleChangeState} name="checkedE" color="primary" />}
                                label="Tips and Document business products"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 2 }} />
            <CardActions sx={{ p: 0, pt: 3 }}>
                <Grid spacing={2} container justifyContent="flex-end">
                    <Grid item>
                        <AnimateButton>
                            <Button variant="contained">Update</Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item>
                        <Button sx={{ color: theme.palette.error.main }}>Clear</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </SubCard>
    );
};

export default Settings;
