import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControlLabel,
    List,
    ListItemButton,
    ListItemText,
    Radio,
    RadioGroup,
    Typography
} from '@mui/material';

// select options
const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel'
];

// ===============================|| SELECTION ROW ||=============================== //

function ConfirmationDialogRaw({ _onClose, value: valueProp, open, ...other }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current?.focus();
        }
    };

    const handleCancel = () => {
        _onClose();
    };

    const handleOk = () => {
        _onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog TransitionProps={{ onEntering: handleEntering }} aria-labelledby="confirmation-dialog-title" open={open} {...other}>
            {open && (
                <>
                    <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
                    <DialogContent dividers>
                        <RadioGroup ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
                            {options.map((option) => (
                                <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                            ))}
                        </RadioGroup>
                    </DialogContent>
                    <DialogActions sx={{ pr: 2.5, pt: 2.5 }}>
                        <Button sx={{ color: theme.palette.error.dark }} autoFocus color="secondary" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button variant="contained" size="small" onClick={handleOk}>
                            Done
                        </Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
}

ConfirmationDialogRaw.propTypes = {
    _onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
};

// ===============================|| UI DIALOG - CONFIRMATION ||=============================== //

export default function ConfirmationDialog() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Hangouts Call');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    return (
        <div>
            <List component="div" role="group">
                <ListItemButton divider disabled>
                    <ListItemText primary={<Typography variant="subtitle1">Interruptions</Typography>} />
                </ListItemButton>
                <ListItemButton
                    divider
                    aria-haspopup="true"
                    aria-controls="ringtone-menu"
                    aria-label="phone ringtone"
                    onClick={handleClickListItem}
                >
                    <ListItemText
                        primary={<Typography variant="subtitle1">Phone Ringtone</Typography>}
                        secondary={<Typography variant="caption">{value}</Typography>}
                    />
                </ListItemButton>
                <ListItemButton divider disabled>
                    <ListItemText
                        primary={<Typography variant="subtitle1">Default Notification Ringtone</Typography>}
                        secondary={<Typography variant="caption">Tethys</Typography>}
                    />
                </ListItemButton>
                <ConfirmationDialogRaw id="ringtone-menu" keepMounted open={open} _onClose={handleClose} value={value} />
            </List>
        </div>
    );
}
