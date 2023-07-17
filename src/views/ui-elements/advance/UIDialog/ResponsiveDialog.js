import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, useMediaQuery } from '@mui/material';

// ===============================|| UI DIALOG - RESPONSIVE ||=============================== //

export default function ResponsiveDialog() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                {open && (
                    <>
                        <DialogTitle id="responsive-dialog-title">Use Google&apos;s location service?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <Typography variant="body2" component="span">
                                    Let Google help apps determine location. This means sending anonymous location data to Google, even when
                                    no apps are running.
                                </Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ pr: 2.5 }}>
                            <Button sx={{ color: theme.palette.error.dark }} autoFocus onClick={handleClose} color="secondary">
                                Disagree
                            </Button>
                            <Button variant="contained" size="small" onClick={handleClose} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
}
