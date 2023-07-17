// material-ui
import {
    Button,
    CardActions,
    CardMedia,
    Grid,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';

// project imports
import Chip from 'ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';

// assets
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Phone1 from 'assets/images/widget/phone-1.jpg';
import Phone2 from 'assets/images/widget/phone-2.jpg';
import Phone3 from 'assets/images/widget/phone-3.jpg';
import Phone4 from 'assets/images/widget/phone-4.jpg';
import MainCard from 'ui-component/cards/MainCard';

// table data
function createData(customer, cid, photo, product, quantity, date, status, statuscolor) {
    return { customer, cid, photo, product, quantity, date, status, statuscolor };
}

const rows = [
    createData('John Deo', '#81412314', Phone1, 'Moto G5', '10', '17-2-2017', 'Pending', 'warning'),
    createData('Jenny William', '#68457898', Phone2, 'iPhone 8', '16', '20-2-2017', 'Paid', 'primary'),
    createData('Lori Moore', '#45457898', Phone3, 'Redmi 4', '20', '17-2-2017', 'Success', 'success'),
    createData('Austin Pena', '#62446232', Phone4, 'Jio', '15', '25-4-2017', 'Failed', 'error')
];

// =========================|| LATEST ORDER CARD ||========================= //

export default function LatestOrder() {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Latest Order" content={false}>
                    <TableContainer>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ pl: 3 }}>Customer</TableCell>
                                    <TableCell>Order Id</TableCell>
                                    <TableCell>Photo</TableCell>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center" sx={{ pr: 3 }}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow hover key={index}>
                                        <TableCell sx={{ pl: 3 }}>{row.customer}</TableCell>
                                        <TableCell>{row.cid}</TableCell>
                                        <TableCell>
                                            <CardMedia component="img" image={row.photo} title="image" sx={{ width: 20, height: 'auto' }} />
                                        </TableCell>
                                        <TableCell>{row.product}</TableCell>
                                        <TableCell align="right">{row.quantity}</TableCell>
                                        <TableCell align="center">{row.date}</TableCell>
                                        <TableCell align="center">
                                            <Chip chipcolor={row.statuscolor} label={row.status} size="small" />
                                        </TableCell>
                                        <TableCell align="center" sx={{ pr: 3 }}>
                                            <Stack direction="row" justifyContent="center" alignItems="center">
                                                <IconButton color="primary" size="large" aria-label='"edit"'>
                                                    <EditOutlinedIcon />
                                                </IconButton>
                                                <IconButton color="inherit" size="large" aria-label='"Delete"'>
                                                    <DeleteOutlineOutlinedIcon />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                        <Button variant="text" size="small">
                            View all Orders
                        </Button>
                    </CardActions>
                </MainCard>
            </Grid>
        </Grid>
    );
}
