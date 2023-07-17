import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

// material-ui
import { Alert, Button, CardContent, Divider, Dialog, Grid, IconButton, Stack, Typography, Zoom } from '@mui/material';

// third-party
import { CopyToClipboard } from 'react-copy-to-clipboard';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Transitions from 'ui-component/extended/Transitions';
import { gridSpacing } from 'store/constant';

// assets
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { IconGift, IconTrophy } from '@tabler/icons';
import discount from 'assets/images/e-commerce/discount.png';

const Transition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

// ==============================|| CHECKOUT CART - DISCOUNT COUPON CODE ||============================== //

const CouponCode = ({ open, handleClose, setCoupon }) => {
    const [animate, setAnimate] = useState(false);

    const setDiscount = (code) => {
        setAnimate(true);
        setCoupon(code);
        setTimeout(() => {
            setAnimate(false);
        }, 2500);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            sx={{
                '& .MuiDialog-paper': {
                    p: 0
                }
            }}
        >
            {open && (
                <MainCard
                    title="Festival gift for your"
                    secondary={
                        <IconButton onClick={handleClose} size="large">
                            <HighlightOffTwoToneIcon fontSize="small" />
                        </IconButton>
                    }
                >
                    <Grid container spacing={gridSpacing}>
                        {animate && (
                            <Grid item xs={12}>
                                <Transitions type="zoom" in={animate} direction="down">
                                    <Alert
                                        variant="outlined"
                                        severity="success"
                                        sx={{ borderColor: 'success.dark', color: 'success.dark' }}
                                    >
                                        coupon copied
                                    </Alert>
                                </Transitions>
                            </Grid>
                        )}
                        <Grid item xs={12} sm={6}>
                            <SubCard
                                content={false}
                                sx={{
                                    backgroundImage: `url(${discount})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'right',
                                    borderColor: 'secondary.200'
                                }}
                            >
                                <CardContent>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant="h4">Up to 50% Off</Typography>
                                        </Grid>
                                        <Grid item>
                                            <AnimateButton>
                                                <CopyToClipboard text="BERRY50" onCopy={() => setDiscount('BERRY50')}>
                                                    <Button
                                                        variant="outlined"
                                                        color="secondary"
                                                        size="small"
                                                        sx={{
                                                            bgcolor: 'secondary.light',
                                                            color: 'secondary.dark',
                                                            border: '2px dashed',
                                                            '&:hover': { border: '2px dashed', bgcolor: 'secondary.light' }
                                                        }}
                                                    >
                                                        BERRY50
                                                    </Button>
                                                </CopyToClipboard>
                                            </AnimateButton>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SubCard
                                content={false}
                                sx={{
                                    backgroundImage: `url(${discount})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'right',
                                    borderColor: 'error.light'
                                }}
                            >
                                <CardContent>
                                    <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 2, sm: 0 }}>
                                        <Grid item>
                                            <Typography variant="h4">Festival Fires</Typography>
                                        </Grid>
                                        <Grid item>
                                            <AnimateButton>
                                                <CopyToClipboard text="FLAT05" onCopy={() => setDiscount('FLAT05')}>
                                                    <Button
                                                        variant="outlined"
                                                        color="error"
                                                        size="small"
                                                        sx={{
                                                            bgcolor: 'orange.light',
                                                            color: 'error.main',
                                                            border: '2px dashed',
                                                            '&:hover': { border: '2px dashed', bgcolor: 'orange.light' }
                                                        }}
                                                    >
                                                        FLAT05
                                                    </Button>
                                                </CopyToClipboard>
                                            </AnimateButton>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </SubCard>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={6} sm={2}>
                                    <Avatar color="primary" size="md" variant="rounded">
                                        <IconGift />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={6} sm={2} sx={{ display: { xs: 'block', sm: 'none' } }}>
                                    <AnimateButton>
                                        <CopyToClipboard text="SUB150" onCopy={() => setDiscount('SUB150')}>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                sx={{
                                                    bgcolor: 'primary.light',
                                                    color: 'primary.dark',
                                                    border: '2px dashed',
                                                    '&:hover': { border: '2px dashed', bgcolor: 'primary.light' }
                                                }}
                                            >
                                                SUB150
                                            </Button>
                                        </CopyToClipboard>
                                    </AnimateButton>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Stack spacing={0.25}>
                                        <Typography variant="subtitle1">Get $150 off on your subscription</Typography>
                                        <Typography variant="caption">
                                            When you subscribe to the unlimited consultation plan on berry.
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    <AnimateButton>
                                        <CopyToClipboard text="SUB150" onCopy={() => setDiscount('SUB150')}>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                sx={{
                                                    bgcolor: 'primary.light',
                                                    color: 'primary.dark',
                                                    border: '2px dashed',
                                                    '&:hover': { border: '2px dashed', bgcolor: 'primary.light' }
                                                }}
                                            >
                                                SUB150
                                            </Button>
                                        </CopyToClipboard>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={6} sm={2}>
                                    <Avatar color="warning" size="md" variant="rounded">
                                        <IconTrophy />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={6} sm={2} sx={{ display: { xs: 'block', sm: 'none' } }}>
                                    <AnimateButton>
                                        <CopyToClipboard text="UPTO200" onCopy={() => setDiscount('UPTO200')}>
                                            <Button
                                                variant="outlined"
                                                color="warning"
                                                size="small"
                                                sx={{
                                                    bgcolor: 'warning.light',
                                                    color: 'warning.dark',
                                                    border: '2px dashed',
                                                    '&:hover': { border: '2px dashed', bgcolor: 'warning.light' }
                                                }}
                                            >
                                                UPTO200
                                            </Button>
                                        </CopyToClipboard>
                                    </AnimateButton>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Stack spacing={0.25}>
                                        <Typography variant="subtitle1">Save up to $200</Typography>
                                        <Typography variant="caption">
                                            Make 4 play store recharge code purchases & save up to $200
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    <AnimateButton>
                                        <CopyToClipboard text="UPTO200" onCopy={() => setDiscount('UPTO200')}>
                                            <Button
                                                variant="outlined"
                                                color="warning"
                                                size="small"
                                                sx={{
                                                    bgcolor: 'warning.light',
                                                    color: 'warning.dark',
                                                    border: '2px dashed',
                                                    '&:hover': { border: '2px dashed', bgcolor: 'warning.light' }
                                                }}
                                            >
                                                UPTO200
                                            </Button>
                                        </CopyToClipboard>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </Dialog>
    );
};

CouponCode.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    setCoupon: PropTypes.func
};

export default CouponCode;
