import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Typography } from '@mui/material';

// third party
import Draggable from 'react-draggable';

// draggable
function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

// ===============================|| UI DIALOG - DRAGGABLE ||=============================== //

export default function DraggableDialog() {
    const theme = useTheme();
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
                Open Draggable Dialog
            </Button>
            <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title">
                {open && (
                    <>
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            Subscribe
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <Typography variant="body2" component="span">
                                    To subscribe to this website, please enter your email address here. We will send updates occasionally.
                                </Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button sx={{ color: theme.palette.error.dark }} autoFocus onClick={handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button variant="contained" size="small" onClick={handleClose}>
                                Subscribe
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
}
