// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Divider,
    Grid,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import Chip from 'ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';

// assets
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';

const sxDivider = {
    borderColor: 'primary.light'
};

const detailsIconSX = {
    width: 15,
    height: 15,
    verticalAlign: 'text-top',
    mr: 0.5,
    mt: 0.25
};

// table data
function createData(product, description, quantity, amount, total) {
    return { product, description, quantity, amount, total };
}

const rows = [
    createData('Logo Design', 'lorem ipsum dolor sit amat, connecter adieu siccing eliot', '6', '$200.00', '$1200.00'),
    createData('Landing Page', 'lorem ipsum dolor sit amat, connecter adieu siccing eliot', '7', '$100.00', '$700.00'),
    createData('Admin Template', 'lorem ipsum dolor sit amat, connecter adieu siccing eliot', '5', '$150.00', '$750.00')
];

const Details = () => {
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Customer" secondary={<Typography variant="subtitle1">Placed on 12.07.2018 10:00</Typography>}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Typography variant="body2">
                                        <CalendarTodayTwoToneIcon sx={detailsIconSX} /> Sophia Hale
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        <PhoneAndroidTwoToneIcon sx={detailsIconSX} /> 070 123 4567
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        <EmailTwoToneIcon sx={detailsIconSX} /> example@mail.com
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={sxDivider} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Stack spacing={2}>
                                        <Typography variant="h4">Payment method</Typography>
                                        <Stack spacing={0}>
                                            <Typography variant="h6" sx={{ mb: 1 }}>
                                                Credit Card
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Transaction ID :</Typography>
                                                <Typography variant="body2">000001-TXT</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Amount :</Typography>
                                                <Typography variant="body2">$2500</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Stack spacing={2}>
                                        <Typography variant="h4">Shipping method</Typography>
                                        <Stack spacing={0}>
                                            <Typography variant="h6" sx={{ mb: 1 }}>
                                                Carrier
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Tracking Code :</Typography>
                                                <Typography variant="body2">FX-012345-6</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Date :</Typography>
                                                <Typography variant="body2">12.15.2018</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Stack spacing={0} sx={{ mt: { xs: 0, md: 3 } }}>
                                        <Stack direction="row" spacing={1}>
                                            <Typography variant="subtitle1">Fulfillment status :</Typography>
                                            <Typography variant="body2">Delivered</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={1}>
                                            <Typography variant="subtitle1">Payment status :</Typography>
                                            <Chip label="Paid" variant="outlined" size="small" chipcolor="success" />
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={sxDivider} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} md={4}>
                                    <Stack spacing={2}>
                                        <Typography variant="h4">Billing address</Typography>
                                        <Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">First name :</Typography>
                                                <Typography variant="body2">Joseph</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Last name :</Typography>
                                                <Typography variant="body2">William</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Address :</Typography>
                                                <Typography variant="body2">4898 Joanne Lane street</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">City :</Typography>
                                                <Typography variant="body2">Boston</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Country :</Typography>
                                                <Typography variant="body2">United States</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">State :</Typography>
                                                <Typography variant="body2">Massachusetts</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Zip code :</Typography>
                                                <Typography variant="body2">02110</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Phone :</Typography>
                                                <Typography variant="body2">+1 (070) 123-4567</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Stack spacing={2}>
                                        <Typography variant="h4">Shipping address</Typography>
                                        <Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">First name :</Typography>
                                                <Typography variant="body2">Sara</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Last name :</Typography>
                                                <Typography variant="body2">Soudan</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Address :</Typography>
                                                <Typography variant="body2">4898 Joanne Lane street</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">City :</Typography>
                                                <Typography variant="body2">Boston</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Country :</Typography>
                                                <Typography variant="body2">United States</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">State :</Typography>
                                                <Typography variant="body2">Massachusetts</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Zip code :</Typography>
                                                <Typography variant="body2">02110</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Typography variant="subtitle1">Phone :</Typography>
                                                <Typography variant="body2">+1 (070) 123-4567</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Products" content={false}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ pl: 3 }}>Description</TableCell>
                                            <TableCell align="right">Quantity</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total</TableCell>
                                            <TableCell align="right" sx={{ pr: 3 }} />
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell sx={{ pl: 3 }}>
                                                    <Typography align="left" variant="subtitle1">
                                                        {row.product}
                                                    </Typography>
                                                    <Typography align="left" variant="body2">
                                                        {row.description}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">{row.quantity}</TableCell>
                                                <TableCell align="right">{row.amount}</TableCell>
                                                <TableCell align="right">{row.total}</TableCell>
                                                <TableCell sx={{ pr: 3 }} align="right">
                                                    <IconButton color="primary" size="large" aria-label="product delete">
                                                        <DeleteTwoToneIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={12}>
                            <SubCard
                                sx={{
                                    mx: 3,
                                    mb: 3,
                                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light
                                }}
                            >
                                <Grid container justifyContent="flex-end" spacing={gridSpacing}>
                                    <Grid item sm={6} md={4}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={6}>
                                                        <Typography align="right" variant="subtitle1">
                                                            Sub Total :
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography align="right" variant="body2">
                                                            $4725.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography align="right" variant="subtitle1">
                                                            Taxes (10%) :
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography align="right" variant="body2">
                                                            $57.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography align="right" variant="subtitle1">
                                                            Discount (5%) :
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography align="right" variant="body2">
                                                            $45.00
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Divider sx={{ bgcolor: 'dark.main' }} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={6}>
                                                        <Typography align="right" color="primary" variant="subtitle1">
                                                            Total :
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography align="right" color="primary" variant="subtitle1">
                                                            $4827.00
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </SubCard>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    );
};

export default Details;
