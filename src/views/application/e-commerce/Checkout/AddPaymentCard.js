import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useDispatch } from 'store';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    Dialog,
    FormControl,
    FormControlLabel,
    IconButton,
    Grid,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Zoom,
    FormHelperText
} from '@mui/material';

// third-party
import * as yup from 'yup';
import { useFormik } from 'formik';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

// assets
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

const Transition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

const validationSchema = yup.object({
    type: yup.string().required('Card type selection is required'),
    method: yup.string().required('Card selection is required'),
    bank: yup.string().required('Bank is required'),
    number: yup.string().required('Card number is required'),
    expired: yup.string().required('Expiry date is required'),
    cvv: yup.string().required('CVV is required')
});

// ==============================|| CHECKOUT PAYMENT - ADD NEW CARDS ||============================== //

const AddPaymentCard = ({ open, handleClose }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            number: '',
            type: '',
            expired: '',
            cvv: '',
            bank: '',
            method: ''
        },
        validationSchema,
        onSubmit: () => {
            handleClose();
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Payment Card Add Success',
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
        }
    });

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
                    title="Add Payment Card"
                    secondary={
                        <IconButton onClick={handleClose} size="large" aria-label="close add card tabs">
                            <HighlightOffTwoToneIcon fontSize="small" />
                        </IconButton>
                    }
                >
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-label="type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                        name="type"
                                        id="type"
                                    >
                                        <FormControlLabel
                                            value="visa"
                                            control={
                                                <Radio
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        '&.Mui-checked': { color: theme.palette.primary.main }
                                                    }}
                                                />
                                            }
                                            label="Visa"
                                        />
                                        <FormControlLabel
                                            value="mastercard"
                                            control={
                                                <Radio
                                                    sx={{
                                                        color: theme.palette.secondary.main,
                                                        '&.Mui-checked': { color: theme.palette.secondary.main }
                                                    }}
                                                />
                                            }
                                            label="Mastercard"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                {formik.errors.type && (
                                    <FormHelperText error id="standard-weight-helper-text-name-login">
                                        {formik.errors.type}
                                    </FormHelperText>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="bank"
                                    name="bank"
                                    label="Bank"
                                    value={formik.values.bank}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bank && Boolean(formik.errors.bank)}
                                    helperText={formik.touched.bank && formik.errors.bank}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="number"
                                    name="number"
                                    label="Card Number"
                                    value={formik.values.number}
                                    onChange={formik.handleChange}
                                    error={formik.touched.number && Boolean(formik.errors.number)}
                                    helperText={formik.touched.number && formik.errors.number}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="expired"
                                    name="expired"
                                    label="Expiry Date"
                                    value={formik.values.expired}
                                    onChange={formik.handleChange}
                                    error={formik.touched.expired && Boolean(formik.errors.expired)}
                                    helperText={formik.touched.expired && formik.errors.expired}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="cvv"
                                    name="cvv"
                                    label="CVV"
                                    value={formik.values.cvv}
                                    onChange={formik.handleChange}
                                    error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                                    helperText={formik.touched.cvv && formik.errors.cvv}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-label="method"
                                        value={formik.values.method}
                                        onChange={formik.handleChange}
                                        name="method"
                                        id="method"
                                    >
                                        <FormControlLabel
                                            value="credit"
                                            control={
                                                <Radio
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        '&.Mui-checked': { color: theme.palette.primary.main }
                                                    }}
                                                />
                                            }
                                            label="Credit Card"
                                        />
                                        <FormControlLabel
                                            value="Debit Card"
                                            control={
                                                <Radio
                                                    sx={{
                                                        color: theme.palette.secondary.main,
                                                        '&.Mui-checked': { color: theme.palette.secondary.main }
                                                    }}
                                                />
                                            }
                                            label="debit"
                                        />
                                        <FormControlLabel
                                            value="net-banking"
                                            control={
                                                <Radio
                                                    sx={{
                                                        color: theme.palette.secondary.main,
                                                        '&.Mui-checked': { color: theme.palette.secondary.main }
                                                    }}
                                                />
                                            }
                                            label="Net Banking"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                {formik.errors.method && (
                                    <FormHelperText error id="standard-weight-helper-text-name-login">
                                        {formik.errors.method}
                                    </FormHelperText>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={1} justifyContent="flex-end">
                                    <Button color="error" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <AnimateButton>
                                        <Button variant="contained" type="submit">
                                            Submit
                                        </Button>
                                    </AnimateButton>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </MainCard>
            )}
        </Dialog>
    );
};

AddPaymentCard.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func
};

export default AddPaymentCard;
