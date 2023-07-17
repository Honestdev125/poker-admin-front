import React from 'react';

// material-ui
import { AppBar, Button, Dialog, Divider, IconButton, ListItemText, ListItemButton, List, Slide, Toolbar, Typography } from '@mui/material';

// assets
import CloseIcon from '@mui/icons-material/Close';

// slide animation
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ===============================|| UI DIALOG - FULL SCREEN ||=============================== //

export default function FullScreenDialog() {
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
                Open full-screen dialog
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                {open && (
                    <>
                        <AppBar sx={{ position: 'relative' }}>
                            <Toolbar>
                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" size="large">
                                    <CloseIcon />
                                </IconButton>
                                <Typography variant="h3" color="inherit" sx={{ ml: 2, flex: 1 }}>
                                    Sound
                                </Typography>
                                <Button autoFocus color="inherit" onClick={handleClose}>
                                    SAVE
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItemButton>
                                <ListItemText
                                    primary={<Typography variant="subtitle1">Phone Ringtone</Typography>}
                                    secondary={<Typography variant="caption">Titania</Typography>}
                                />
                            </ListItemButton>
                            <Divider />
                            <ListItemButton>
                                <ListItemText
                                    primary={<Typography variant="subtitle1">Default Notification Ringtone</Typography>}
                                    secondary={<Typography variant="caption">Tethys</Typography>}
                                />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText
                                    primary={<Typography variant="subtitle1">Phone Ringtone</Typography>}
                                    secondary={<Typography variant="caption">Titania</Typography>}
                                />
                            </ListItemButton>
                            <Divider />
                            <ListItemButton>
                                <ListItemText
                                    primary={<Typography variant="subtitle1">Default Notification Ringtone</Typography>}
                                    secondary={<Typography variant="caption">Tethys</Typography>}
                                />
                            </ListItemButton>
                        </List>
                    </>
                )}
            </Dialog>
        </div>
    );
}
