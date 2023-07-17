import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'store';

// material-ui
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    RadioGroup,
    Radio,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from '@mui/material';

// third-party
import currency from 'currency.js';

// project imports
import OrderSummary from './OrderSummary';
import AddressCard from './AddressCard';
import PaymentSelect from './PaymentSelect';
import ColorOptions from '../ColorOptions';
import PaymentOptions from './PaymentOptions';
import PaymentCard from './PaymentCard';
import AddPaymentCard from './AddPaymentCard';
import OrderComplete from './OrderComplete';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

// assets
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { setPaymentCard, setPaymentMethod } from 'store/slices/cart';

const prodImage = require.context('assets/images/e-commerce', true);

// product color select
function getColor(color) {
    return ColorOptions.filter((item) => item.value === color);
}

// ==============================|| CHECKOUT PAYMENT - MAIN ||============================== //

const Payment = ({ checkout, onBack, onNext, handleShippingCharge }) => {
    const dispatch = useDispatch();

    const [type, setType] = useState(checkout.payment.type);
    const [payment, setPayment] = useState(checkout.payment.method);
    const [rows, setRows] = useState(checkout.products);
    const [cards, setCards] = useState(checkout.payment.card);

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [complete, setComplete] = useState(false);

    useEffect(() => {
        if (checkout.step > 2) {
            setComplete(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setRows(checkout.products);
    }, [checkout.products]);

    const cardHandler = (card) => {
        if (payment === 'card') {
            setCards(card);
            dispatch(setPaymentCard(card));
        }
    };

    const handlePaymentMethod = (value) => {
        setPayment(value);
        dispatch(setPaymentMethod(value));
    };

    const completeHandler = () => {
        if (payment === 'card' && (cards === '' || cards === null)) {
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Select Payment Card',
                    variant: 'alert',
                    alert: {
                        color: 'error'
                    },
                    close: false
                })
            );
        } else {
            onNext();
            setComplete(true);
        }
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6} lg={8} xl={9}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Stack>
                            <Typography variant="subtitle1">Delivery Options</Typography>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-label="delivery-options"
                                    value={type}
                                    onChange={(e) => {
                                        setType(e.target.value);
                                        handleShippingCharge(e.target.value);
                                    }}
                                    name="delivery-options"
                                >
                                    <Grid container spacing={gridSpacing} alignItems="center" sx={{ pt: 2 }}>
                                        <Grid item xs={12} sm={6} md={12} lg={6}>
                                            <SubCard content={false}>
                                                <Box sx={{ p: 2 }}>
                                                    <FormControlLabel
                                                        value="free"
                                                        control={<Radio />}
                                                        label={
                                                            <Stack spacing={0.25}>
                                                                <Typography variant="subtitle1">Standard Delivery (Free)</Typography>
                                                                <Typography variant="caption">Delivered on Monday 8 Jun</Typography>
                                                            </Stack>
                                                        }
                                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
                                                    />
                                                </Box>
                                            </SubCard>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={12} lg={6}>
                                            <SubCard content={false}>
                                                <Box sx={{ p: 2 }}>
                                                    <FormControlLabel
                                                        value="fast"
                                                        control={<Radio />}
                                                        label={
                                                            <Stack spacing={0.25}>
                                                                <Typography variant="subtitle1">Fast Delivery ($5.00)</Typography>
                                                                <Typography variant="caption">Delivered on Friday 5 Jun</Typography>
                                                            </Stack>
                                                        }
                                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
                                                    />
                                                </Box>
                                            </SubCard>
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Payment Options</Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormControl>
                            <RadioGroup
                                aria-label="delivery-options"
                                value={payment}
                                onChange={(e) => handlePaymentMethod(e.target.value)}
                                name="delivery-options"
                            >
                                <Grid container spacing={gridSpacing} alignItems="center">
                                    {PaymentOptions.map((item, index) => (
                                        <Grid item xs={12} key={index}>
                                            <PaymentSelect item={item} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ opacity: payment === 'card' ? 1 : 0.4 }}>
                        <SubCard
                            title="Add Your Card"
                            secondary={
                                <Button variant="contained" size="small" startIcon={<AddTwoToneIcon />} onClick={handleClickOpen}>
                                    Add Card
                                </Button>
                            }
                        >
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} xl={6}>
                                    <PaymentCard type="mastercard" cards={cards} cardHandler={cardHandler} />
                                </Grid>
                                <Grid item xs={12} xl={6}>
                                    <PaymentCard type="visa" cards={cards} cardHandler={cardHandler} />
                                </Grid>
                            </Grid>
                            <AddPaymentCard open={open} handleClose={handleClose} />
                        </SubCard>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Button variant="text" startIcon={<KeyboardBackspaceIcon />} onClick={onBack}>
                                    Back
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={completeHandler}>
                                    Complete Order
                                </Button>
                                <OrderComplete open={complete} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Stack>
                            <Typography variant="subtitle1" sx={{ pb: 2 }}>
                                Cart Items
                            </Typography>
                            <TableContainer>
                                <Table sx={{ minWidth: 280 }} aria-label="simple table">
                                    <TableBody>
                                        {rows.map((row, index) => {
                                            const colorsData = row.color ? getColor(row.color) : false;
                                            return (
                                                <TableRow key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                                                    <TableCell component="th" scope="row">
                                                        <Grid container alignItems="center" spacing={2}>
                                                            <Grid item>
                                                                <Avatar
                                                                    size="md"
                                                                    variant="rounded"
                                                                    src={row.image ? prodImage(`./${row.image}`) : ''}
                                                                    alt="product images"
                                                                />
                                                            </Grid>
                                                            <Grid item>
                                                                <Stack spacing={0}>
                                                                    <Typography variant="subtitle1">{row.name}</Typography>
                                                                    <Stack direction="row" alignItems="center" spacing={1}>
                                                                        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                                                                            Size:{' '}
                                                                            <Typography variant="caption" component="span">
                                                                                {row.size}
                                                                            </Typography>
                                                                        </Typography>
                                                                        <Typography variant="caption" sx={{ fontSize: '1rem' }}>
                                                                            |
                                                                        </Typography>
                                                                        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                                                                            Color:{' '}
                                                                            <Typography variant="caption" component="span">
                                                                                {colorsData ? colorsData[0].label : 'Multicolor'}
                                                                            </Typography>
                                                                        </Typography>
                                                                    </Stack>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.offerPrice && row.quantity && (
                                                            <Typography variant="subtitle1">
                                                                {currency(row.offerPrice * row.quantity).format()}
                                                            </Typography>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <OrderSummary checkout={checkout} />
                    </Grid>
                    <Grid item xs={12}>
                        <AddressCard single change address={checkout.billing} onBack={onBack} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

Payment.propTypes = {
    checkout: PropTypes.object,
    handleShippingCharge: PropTypes.func,
    onBack: PropTypes.func,
    onNext: PropTypes.func
};

export default Payment;
