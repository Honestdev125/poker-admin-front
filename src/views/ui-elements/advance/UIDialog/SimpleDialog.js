import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogTitle,
    Divider,
    List,
    ListItemButton,
    ListItemAvatar,
    ListItemText
} from '@mui/material';

// assets
import AddIcon from '@mui/icons-material/Add';

const avatarImage = require.context('assets/images/users', true);

// alert user data
const emails = [
    {
        email: 'username@company.com',
        avatar: 'avatar-1.png'
    },
    {
        email: 'user02@company.com',
        avatar: 'avatar-2.png'
    }
];

// ===============================|| DIALOG ||=============================== //

function SimpleDialog({ onClose, selectedValue, open }) {
    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            {open && (
                <>
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        User Account
                    </DialogTitle>
                    <Card>
                        <CardContent sx={{ pt: 0 }}>
                            <List>
                                {emails.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <ListItemButton onClick={() => handleListItemClick(item.email)}>
                                            <ListItemAvatar>
                                                <Avatar alt="User 1" src={avatarImage(`./${item.avatar}`)} />
                                            </ListItemAvatar>
                                            <ListItemText primary={item.email} />
                                        </ListItemButton>
                                        <Divider />
                                    </React.Fragment>
                                ))}

                                <ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')}>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                border: '2px solid',
                                                color: 'grey.500',
                                                borderColor: 'grey.500',
                                                bgcolor: 'transparent'
                                            }}
                                        >
                                            <AddIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Add New Account" />
                                </ListItemButton>
                            </List>
                        </CardContent>
                    </Card>
                </>
            )}
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired
};

// ===============================|| UI DIALOG - SIMPLE ||=============================== //

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[0].email);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}
