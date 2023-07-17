// material-ui
import { List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';

// assets
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// ================================|| UI LIST - DISABLED ||================================ //

export default function DisabledList() {
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton>
                    <ListItemIcon>
                        <PieChartOutlineOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Chart" />
                </ListItemButton>
                <ListItemButton disabled>
                    <ListItemIcon>
                        <MapOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Disabled Menu" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <LockOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Page LayoutsAuth Pages" />
                </ListItemButton>
            </List>
        </div>
    );
}
