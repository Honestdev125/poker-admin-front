import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material';

// animation
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ===============================|| UI DIALOG - SLIDE ANIMATION ||=============================== //

export default function AlertDialogSlide() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title1"
                aria-describedby="alert-dialog-slide-description1"
            >
                {open && (
                    <>
                        <DialogTitle id="alert-dialog-slide-title1">Use Google&apos;s location service?</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description1">
                                <Typography variant="body2" component="span">
                                    Let Google help apps determine location. This means sending anonymous location data to Google, even when
                                    no apps are running.
                                </Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ pr: 2.5 }}>
                            <Button
                                sx={{ color: theme.palette.error.dark, borderColor: theme.palette.error.dark }}
                                onClick={handleClose}
                                color="secondary"
                            >
                                Disagree
                            </Button>
                            <Button variant="contained" size="small" onClick={handleClose}>
                                Agree
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    );
}
