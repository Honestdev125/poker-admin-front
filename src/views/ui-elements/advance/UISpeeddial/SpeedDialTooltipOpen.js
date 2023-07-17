import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Typography from '@mui/material/Typography';

// assets
import FileCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import SaveIcon from '@mui/icons-material/SaveTwoTone';
import PrintIcon from '@mui/icons-material/PrintTwoTone';
import ShareIcon from '@mui/icons-material/ShareTwoTone';
import FavoriteIcon from '@mui/icons-material/FavoriteTwoTone';

// =============================|| UI SPEEDDIAL - PERSISTENT ICON ||============================= //

export default function SpeedDialTooltipOpen() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // fab action options
    const actions = [
        { icon: <FileCopyIcon sx={{ color: theme.palette.grey[700] }} />, name: 'Copy' },
        { icon: <SaveIcon sx={{ color: theme.palette.grey[700] }} />, name: 'Save' },
        { icon: <PrintIcon sx={{ color: theme.palette.grey[700] }} />, name: 'Print' },
        { icon: <ShareIcon sx={{ color: theme.palette.grey[700] }} />, name: 'Share' },
        { icon: <FavoriteIcon sx={{ color: theme.palette.grey[700] }} />, name: 'Like' }
    ];
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [hidden, setHidden] = React.useState(false);
    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    return (
        <Box sx={{ height: 380, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                hidden={hidden}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={<Typography variant="subtitle1">{action.name}</Typography>}
                        tooltipOpen
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
