// material-ui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import ViewCompactTwoToneIcon from '@mui/icons-material/ViewCompactTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';

// ================================|| UI LIST - SIMPLE LIST ||================================ //

export default function SimpleList() {
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton>
                    <ListItemIcon>
                        <ViewCompactTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Sample Page" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DescriptionTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Elements" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListAltTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Page Layouts" />
                </ListItemButton>
            </List>
        </div>
    );
}
