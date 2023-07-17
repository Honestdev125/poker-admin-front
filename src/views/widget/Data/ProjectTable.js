// material-ui
import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project imports
import Chip from 'ui-component/extended/Chip';

// assets
import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';
import Avatar4 from 'assets/images/users/avatar-4.png';

// table data
const createData = (avtar, name, designation, product, date, badgeText, badgeType) => ({
    avtar,
    name,
    designation,
    product,
    date,
    badgeText,
    badgeType
});

const rows = [
    createData(Avatar1, 'John Deo', 'Graphics Designer', 'Materially', 'Jun, 26', 'Low', 'warning'),
    createData(Avatar2, 'Jenifer Vintage', 'Web Designer', 'Mashable', 'March, 31', 'High', 'error'),
    createData(Avatar3, 'William Jem', 'Developer', 'Flatable', 'Aug, 02', 'Medium', 'primary'),
    createData(Avatar4, 'David Jones', 'Developer', 'Guruable', 'Sep, 22', 'High', 'error')
];

// ===========================|| DATA WIDGET - PROJECT TABLE CARD ||=========================== //

const ProjectTable = () => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ pl: 3 }}>Assigned</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell align="right" sx={{ pr: 3 }}>
                        Priority
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow hover key={index}>
                        <TableCell sx={{ pl: 3 }}>
                            <Grid container spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                                <Grid item>
                                    <Avatar alt="User 1" src={row.avtar} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography component="div" align="left" variant="subtitle1">
                                        {row.name}
                                    </Typography>
                                    <Typography component="div" align="left" variant="subtitle2">
                                        {row.designation}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell>{row.product}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell align="right" sx={{ pr: 3 }}>
                            <Chip chipcolor={row.badgeType} label={row.badgeText} size="small" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default ProjectTable;
