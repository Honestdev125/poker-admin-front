// material-ui
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';

// assets
import ImageIcon from '@mui/icons-material/ImageTwoTone';
import WorkIcon from '@mui/icons-material/WorkOffTwoTone';

// ================================|| UI LIST - FOLDER ||================================ //

export default function FolderList() {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar size="xs" color="primary" outline>
                        <ImageIcon sx={{ fontSize: '1.1rem' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar size="xs" color="secondary" outline>
                        <WorkIcon sx={{ fontSize: '1.1rem' }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
        </List>
    );
}
