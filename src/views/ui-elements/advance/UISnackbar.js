// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { useDispatch } from 'store';
import { gridSpacing } from 'store/constant';
import { openSnackbar } from 'store/slices/snackbar';

// ==============================|| UI SNACKBAR ||============================== //

const UISnackbar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    return (
        <MainCard title="Snackbar" secondary={<SecondaryAction link="https://next.material-ui.com/components/snackbars/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={4}>
                    <SubCard title="Basic Snackbar">
                        <Grid container spacing={3} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is default message',
                                                variant: 'alert',
                                                close: false
                                            })
                                        )
                                    }
                                >
                                    Default
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{
                                        color: theme.palette.error.dark,
                                        borderColor: theme.palette.error.dark,
                                        '&:hover': { background: theme.palette.error.main + 20, borderColor: theme.palette.error.dark }
                                    }}
                                    variant="outlined"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is error message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'error'
                                                },
                                                close: false
                                            })
                                        )
                                    }
                                >
                                    Error
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.success.dark,
                                        borderColor: theme.palette.success.dark,
                                        '&:hover': { background: theme.palette.success.main + 20, borderColor: theme.palette.success.dark }
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is success message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'success'
                                                },
                                                close: false
                                            })
                                        )
                                    }
                                >
                                    Success
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.warning.dark,
                                        borderColor: theme.palette.warning.dark,
                                        '&:hover': { background: theme.palette.warning.main + 20, borderColor: theme.palette.warning.dark }
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is warning message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'warning'
                                                },
                                                close: false
                                            })
                                        )
                                    }
                                >
                                    Warning
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <SubCard title="With Close">
                        <Grid container spacing={3} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is default message',
                                                variant: 'alert'
                                            })
                                        )
                                    }
                                >
                                    Default
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{
                                        color: theme.palette.error.dark,
                                        borderColor: theme.palette.error.dark,
                                        '&:hover': { background: theme.palette.error.main + 20, borderColor: theme.palette.error.dark }
                                    }}
                                    variant="outlined"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is error message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'error'
                                                }
                                            })
                                        )
                                    }
                                >
                                    Error
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.success.dark,
                                        borderColor: theme.palette.success.dark,
                                        '&:hover': { background: theme.palette.success.main + 20, borderColor: theme.palette.success.dark }
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is success message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'success'
                                                }
                                            })
                                        )
                                    }
                                >
                                    Success
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.warning.dark,
                                        borderColor: theme.palette.warning.dark,
                                        '&:hover': { background: theme.palette.warning.main + 20, borderColor: theme.palette.warning.dark }
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is warning message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'warning'
                                                }
                                            })
                                        )
                                    }
                                >
                                    Warning
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <SubCard title="With Close + Action">
                        <Grid container spacing={3} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is default message',
                                                variant: 'alert',
                                                actionButton: true
                                            })
                                        )
                                    }
                                >
                                    Default
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{
                                        color: theme.palette.error.dark,
                                        borderColor: theme.palette.error.dark,
                                        '&:hover': { background: theme.palette.error.main + 20, borderColor: theme.palette.error.dark }
                                    }}
                                    variant="outlined"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is error message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'error'
                                                },
                                                actionButton: true
                                            })
                                        )
                                    }
                                >
                                    Error
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.success.dark,
                                        borderColor: theme.palette.success.dark,
                                        '&:hover': { background: theme.palette.success.main + 20, borderColor: theme.palette.success.dark }
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is success message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'success'
                                                },
                                                actionButton: true
                                            })
                                        )
                                    }
                                >
                                    Success
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.warning.dark,
                                        borderColor: theme.palette.warning.dark,
                                        '&:hover': { background: theme.palette.warning.main + 20, borderColor: theme.palette.warning.dark }
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is warning message',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'warning'
                                                },
                                                actionButton: true
                                            })
                                        )
                                    }
                                >
                                    Warning
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <SubCard title="Snackbar Position">
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                anchorOrigin: { vertical: 'top', horizontal: 'left' },
                                                message: 'This is an top-left message!'
                                            })
                                        )
                                    }
                                >
                                    Top-Left
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                anchorOrigin: { vertical: 'top', horizontal: 'center' },
                                                message: 'This is an top-center message!'
                                            })
                                        )
                                    }
                                >
                                    Top-Center
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                                                message: 'This is an top-right message!'
                                            })
                                        )
                                    }
                                >
                                    Top-Right
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                                                message: 'This is an bottom-right message!'
                                            })
                                        )
                                    }
                                >
                                    Bottom-Right
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                                                message: 'This is an bottom-center message!'
                                            })
                                        )
                                    }
                                >
                                    Bottom-Center
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                                                message: 'This is an bottom-left message!'
                                            })
                                        )
                                    }
                                >
                                    Bottom-Left
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="Snackbar Trasition">
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is an fade message!',
                                                transition: 'Fade'
                                            })
                                        )
                                    }
                                >
                                    Default/Fade
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is an slide-left message!',
                                                transition: 'SlideLeft'
                                            })
                                        )
                                    }
                                >
                                    Slide Left
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is an slide-up message!',
                                                transition: 'SlideUp'
                                            })
                                        )
                                    }
                                >
                                    Slide Up
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is an slide-right message!',
                                                transition: 'SlideRight'
                                            })
                                        )
                                    }
                                >
                                    Slide Right
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is an slide-down message!',
                                                transition: 'SlideDown'
                                            })
                                        )
                                    }
                                >
                                    Slide Down
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'This is an grow message!',
                                                transition: 'Grow'
                                            })
                                        )
                                    }
                                >
                                    Grow
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UISnackbar;
