import PropTypes from 'prop-types';

// material-ui
import { Button, CardActions, Chip, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// table data
const createData = (badgeText, badgeType, subject, dept, date) => ({
    badgeText,
    badgeType,
    subject,
    dept,
    date
});

const rows = [
    createData('Open', 'default', 'Website down for one week', 'Support', 'Today 2:00'),
    createData('Progress', 'primary', 'Loosing control on server', 'Support', 'Yesterday'),
    createData('Closed', 'secondary', 'Authorizations keys', 'Support', '27, Aug'),
    createData('Open', 'default', 'Restoring default settings', 'Support', 'Today 9:00'),
    createData('Progress', 'primary', 'Loosing control on server', 'Support', 'Yesterday'),
    createData('Closed', 'secondary', 'Authorizations keys', 'Support', '27, Aug'),
    createData('Open', 'default', 'Restoring default settings', 'Support', 'Today 9:00'),
    createData('Closed', 'secondary', 'Authorizations keys', 'Support', '27, Aug')
];

// ==========================|| DATA WIDGET - RECENT TICKETS CARD ||========================== //

const RecentTickets = ({ title }) => (
    <MainCard title={title} content={false}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ pl: 3 }}>Subject</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell align="right" sx={{ pr: 3 }}>
                            Status
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow hover key={index}>
                            <TableCell sx={{ pl: 3 }}>{row.subject}</TableCell>
                            <TableCell>{row.dept}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell align="right" sx={{ pr: 3 }}>
                                {/**
                                 * REMINDER:
                                 *  color is an enum */}
                                <Chip variant="outlined" style={{ background: row.badgeType }} label={row.badgeText} size="small" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
                View all Projects
            </Button>
        </CardActions>
    </MainCard>
);

RecentTickets.propTypes = {
    title: PropTypes.string
};

export default RecentTickets;
