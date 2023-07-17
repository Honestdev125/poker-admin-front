import PropTypes from 'prop-types';

// material-ui
import { Button, CardActions, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// =========================|| DATA WIDGET - INCOMING REQUESTS CARD ||========================= //

const IncomingRequests = ({ title }) => (
    <MainCard title={title} content={false}>
        <PerfectScrollbar style={{ height: 290 }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Incoming requests" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ color: 'error.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="You have 2 pending requests.." />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ color: 'warning.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="You have 3 pending tasks" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="New order received" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Incoming requests" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ color: 'error.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="You have 2 pending requests.." />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ color: 'warning.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="You have 3 pending tasks" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="New order received" />
                </ListItemButton>
            </List>
        </PerfectScrollbar>

        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
                Show more
            </Button>
        </CardActions>
    </MainCard>
);

IncomingRequests.propTypes = {
    title: PropTypes.string
};

export default IncomingRequests;
