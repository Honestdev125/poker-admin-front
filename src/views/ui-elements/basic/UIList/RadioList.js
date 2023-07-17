import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Switch, Typography } from '@mui/material';

// ================================|| UI LIST - RADIO ||================================ //

export default function RadioList() {
    const theme = useTheme();
    const [sdm, setSdm] = React.useState(true);
    const [notification, setNotification] = React.useState(false);

    return (
        <Card
            sx={{
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.primary.light,
                mb: 2,
                mt: 2
            }}
        >
            <CardContent>
                <Grid container spacing={3} direction="column">
                    <Grid item>
                        <Grid item container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="subtitle1">Start DND Mode</Typography>
                            </Grid>
                            <Grid item>
                                <Switch size="small" color="primary" checked={sdm} onChange={(e) => setSdm(e.target.checked)} name="sdm" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="subtitle1">Allow Notifications</Typography>
                            </Grid>
                            <Grid item>
                                <Switch
                                    size="small"
                                    checked={notification}
                                    onChange={(e) => setNotification(e.target.checked)}
                                    name="sdm"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
