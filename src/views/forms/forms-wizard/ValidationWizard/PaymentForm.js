import PropTypes from 'prop-types';

// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    cardName: yup.string().required('First Name is required'),
    cardNumber: yup.string().required('Last Name is required')
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

export default function PaymentForm({ paymentData, setPaymentData, handleNext, handleBack, setErrorIndex }) {
    const formik = useFormik({
        initialValues: {
            cardName: paymentData.cardName,
            cardNumber: paymentData.cardNumber
        },
        validationSchema,
        onSubmit: (values) => {
            setPaymentData({
                cardName: values.cardName,
                cardNumber: values.cardNumber
            });
            handleNext();
        }
    });

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Payment method
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="cardName"
                            name="cardName"
                            value={formik.values.cardName}
                            onChange={formik.handleChange}
                            error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                            helperText={formik.touched.cardName && formik.errors.cardName}
                            label="Name on card"
                            fullWidth
                            autoComplete="cc-name"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="cardNumber"
                            name="cardNumber"
                            label="Card number"
                            value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                            fullWidth
                            autoComplete="cc-number"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id="cvv" label="CVV" helperText="Last three digits on signature strip" fullWidth autoComplete="cc-csc" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remember credit card details for next time"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between">
                            <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                Back
                            </Button>
                            <AnimateButton>
                                <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(1)}>
                                    Next
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

PaymentForm.propTypes = {
    paymentData: PropTypes.object,
    setPaymentData: PropTypes.func,
    handleNext: PropTypes.func,
    handleBack: PropTypes.func,
    setErrorIndex: PropTypes.func
};
