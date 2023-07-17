import React from 'react';

// material-ui
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ViewCompactTwoToneIcon from '@mui/icons-material/ViewCompactTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// ================================|| UI LIST - NESTED ||================================ //

export default function NestedList() {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ViewCompactTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                </ListItemIcon>
                <ListItemText primary="1st Level with Icon" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {open && (
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                            </ListItemIcon>
                            <ListItemText primary="Nested List" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                            </ListItemIcon>
                            <ListItemText primary="Nested List" />
                        </ListItemButton>
                    </List>
                )}
            </Collapse>
        </List>
    );
}
