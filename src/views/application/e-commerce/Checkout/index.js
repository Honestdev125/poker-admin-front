import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Grid, Tab, Tabs, Typography } from '@mui/material';

// project imports
import CartEmpty from './CartEmpty';
import Cart from './Cart';
import BillingAddress from './BillingAddress';
import Payment from './Payment';
import MainCard from 'ui-component/cards/MainCard';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

import { useDispatch, useSelector } from 'store';
import { getAddresses, editAddress, addAddress } from 'store/slices/product';
import { removeProduct, setBackStep, setBillingAddress, setNextStep, setShippingCharge, setStep, updateProduct } from 'store/slices/cart';

// assets
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import useConfig from 'hooks/useConfig';

const StyledTab = styled((props) => <Tab {...props} />)(({ theme, border, value, cart }) => ({
    color: cart.checkout.step >= value ? theme.palette.success.dark : theme.palette.grey[600],
    minHeight: 'auto',
    minWidth: 250,
    padding: 16,
    borderRadius: `${border}px`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    textAlign: 'left',
    justifyContent: 'flex-start',
    '&:after': {
        backgroundColor: 'transparent !important'
    },
    '&.Mui-selected': {
        color: theme.palette.primary.main,
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50]
    },
    '& > svg': {
        marginBottom: '0px !important',
        marginRight: 10,
        marginTop: 2,
        height: 20,
        width: 20
    },
    [theme.breakpoints.down('md')]: {
        minWidth: '100%'
    }
}));

// tabs option
const tabsOption = [
    {
        label: 'User Profile',
        icon: <ShoppingCartTwoToneIcon />,
        caption: 'Product Added'
    },
    {
        label: 'Billing Address',
        icon: <ApartmentIcon />,
        caption: 'Billing Information'
    },
    {
        label: 'Payment',
        icon: <CreditCardTwoToneIcon />,
        caption: 'Add & Update Card'
    }
];

// tabs
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <div>{children}</div>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

// ==============================|| PRODUCT - CHECKOUT MAIN ||============================== //

const Checkout = () => {
    const theme = useTheme();
    const cart = useSelector((state) => state.cart);
    const { borderRadius } = useConfig();
    const dispatch = useDispatch();

    const isCart = cart.checkout.products && cart.checkout.products.length > 0;

    const [value, setValue] = useState(cart.checkout.step > 2 ? 2 : cart.checkout.step);
    const [billing, setBilling] = useState(cart.checkout.billing);
    const [address, setAddress] = useState([]);
    const { addresses } = useSelector((state) => state.product);

    useEffect(() => {
        setAddress(addresses);
    }, [addresses]);

    useEffect(() => {
        dispatch(getAddresses());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addBillingAddress = (addressNew) => {
        dispatch(addAddress(addressNew));
    };

    const editBillingAddress = (addressEdit) => {
        dispatch(editAddress(addressEdit));
    };

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(setStep(newValue));
    };

    useEffect(() => {
        setValue(cart.checkout.step > 2 ? 2 : cart.checkout.step);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart.checkout.step]);

    const removeCartProduct = (id) => {
        dispatch(removeProduct(id, cart.checkout.products));
        dispatch(
            openSnackbar({
                open: true,
                message: 'Update Cart Success',
                variant: 'alert',
                alert: {
                    color: 'success'
                },
                close: false
            })
        );
    };

    const updateQuantity = (id, quantity) => {
        dispatch(updateProduct(id, quantity, cart.checkout.products));
    };

    const onNext = () => {
        dispatch(setNextStep());
    };

    const onBack = () => {
        dispatch(setBackStep());
    };

    const billingAddressHandler = (addressBilling) => {
        if (billing !== null || addressBilling !== null) {
            if (addressBilling !== null) {
                setBilling(addressBilling);
            }

            dispatch(setBillingAddress(addressBilling !== null ? addressBilling : billing));
            onNext();
        } else {
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Please select delivery address',
                    variant: 'alert',
                    alert: {
                        color: 'error'
                    },
                    close: false
                })
            );
        }
    };

    const handleShippingCharge = (type) => {
        dispatch(setShippingCharge(type, cart.checkout.shipping));
    };

    return (
        <MainCard>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Tabs
                        value={value}
                        onChange={(e, newValue) => handleChange(newValue)}
                        aria-label="icon label tabs example"
                        variant="scrollable"
                        sx={{
                            '& .MuiTabs-flexContainer': {
                                borderBottom: 'none'
                            },
                            '& .MuiTabs-indicator': {
                                display: 'none'
                            },
                            '& .MuiButtonBase-root + .MuiButtonBase-root': {
                                position: 'relative',
                                overflow: 'visible',
                                ml: 2,
                                '&:after': {
                                    content: '""',
                                    bgcolor: '#ccc',
                                    width: 1,
                                    height: 'calc(100% - 16px)',
                                    position: 'absolute',
                                    top: 8,
                                    left: -8
                                }
                            }
                        }}
                    >
                        {tabsOption.map((tab, index) => (
                            <StyledTab
                                theme={theme}
                                border={borderRadius}
                                value={index}
                                cart={cart}
                                disabled={index > cart.checkout.step}
                                key={index}
                                icon={tab.icon}
                                label={
                                    <Grid container direction="column">
                                        <Typography variant="subtitle1" color="inherit">
                                            {tab.label}
                                        </Typography>
                                        <Typography component="div" variant="caption" sx={{ textTransform: 'capitalize' }}>
                                            {tab.caption}
                                        </Typography>
                                    </Grid>
                                }
                            />
                        ))}
                    </Tabs>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} index={0}>
                        {isCart && (
                            <Cart
                                checkout={cart.checkout}
                                onNext={onNext}
                                removeProduct={removeCartProduct}
                                updateQuantity={updateQuantity}
                            />
                        )}
                        {!isCart && <CartEmpty />}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <BillingAddress
                            checkout={cart.checkout}
                            onBack={onBack}
                            billingAddressHandler={billingAddressHandler}
                            address={address}
                            addAddress={addBillingAddress}
                            editAddress={editBillingAddress}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Payment checkout={cart.checkout} onBack={onBack} onNext={onNext} handleShippingCharge={handleShippingCharge} />
                    </TabPanel>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Checkout;
