import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Button, Grid, Stack, Typography } from '@mui/material';

// project imports
import AddAddress from './AddAddress';
import OrderSummary from './OrderSummary';
import AddressCard from './AddressCard';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// assets
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';

// ==============================|| CHECKOUT BILLING ADDRESS - MAIN ||============================== //

const BillingAddress = ({ checkout, onBack, billingAddressHandler, address, addAddress, editAddress }) => {
    const [select, setSelect] = useState(null);

    const [open, setOpen] = useState(false);
    const handleClickOpen = (billingAddress) => {
        setOpen(true);
        setSelect(billingAddress);
    };

    const handleClose = () => {
        setOpen(false);
        setSelect(null);
    };

    let shippingAddress = <></>;
    let addressResult = <></>;
    if (address) {
        addressResult = address.map((data, index) => {
            if (data.isDefault) {
                shippingAddress = <AddressCard address={data} single />;
            }
            return (
                <Grid item xs={12} lg={6} key={index}>
                    <AddressCard address={data} handleClickOpen={handleClickOpen} billingAddressHandler={billingAddressHandler} />
                </Grid>
            );
        });
    }

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={8}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="subtitle1">Billing Address</Typography>
                            <Button size="small" variant="contained" startIcon={<AddIcon />} onClick={() => handleClickOpen(null)}>
                                Add Address
                            </Button>
                        </Stack>
                    </Grid>
                    {addressResult}
                    <Grid item xs={12}>
                        <OrderSummary checkout={checkout} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Button variant="text" startIcon={<KeyboardBackspaceIcon />} onClick={onBack}>
                                    Back
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={() => billingAddressHandler(null)}>
                                    Place Order
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <SubCard sx={{ mb: gridSpacing }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <PersonOutlineTwoToneIcon color="primary" />
                                <Typography variant="h3">Delia Pope</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={0.25}>
                                <Typography variant="caption">Email</Typography>
                                <Typography variant="subtitle1">deliaturewpo@company.com</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={0.25}>
                                <Typography variant="caption">Contact</Typography>
                                <Typography variant="subtitle1">(980) 473-2942</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={0.25}>
                                <Typography variant="caption">No. of order</Typography>
                                <Typography variant="subtitle1">19</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </SubCard>
                {shippingAddress}
            </Grid>
            <AddAddress open={open} handleClose={handleClose} address={select} addAddress={addAddress} editAddress={editAddress} />
        </Grid>
    );
};

BillingAddress.propTypes = {
    address: PropTypes.array,
    checkout: PropTypes.object,
    addAddress: PropTypes.func,
    editAddress: PropTypes.func,
    billingAddressHandler: PropTypes.func,
    onBack: PropTypes.func
};

export default BillingAddress;
