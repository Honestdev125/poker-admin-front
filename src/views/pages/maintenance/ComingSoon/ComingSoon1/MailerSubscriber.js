// material-ui
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, OutlinedInput } from '@mui/material';

// third party
import { useDispatch } from 'store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import useScriptRef from 'hooks/useScriptRef';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

// ===========================|| MAILER SUBSCRIBER ||=========================== //

const MailerSubscriber = ({ ...others }) => {
    const scriptedRef = useScriptRef();
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                email: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    const options = {
                        headers: {
                            'content-type': 'application/json'
                        }
                    };
                    await axios.post('https://yourapicall', { email: values.email }, options);
                    dispatch(
                        openSnackbar({
                            open: true,
                            message: 'Success! Please check inbox and confirm.',
                            variant: 'alert',
                            alert: {
                                color: 'success'
                            },
                            close: false
                        })
                    );

                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);
                    }
                } catch (err) {
                    if (scriptedRef.current) {
                        setStatus({ success: false });
                        setErrors({ submit: err?.message });
                        setSubmitting(false);
                    }
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item xs zeroMinWidth>
                            <FormControl fullWidth error={Boolean(touched.email && errors.email)}>
                                <InputLabel htmlFor="outlined-adornment-email-forgot">Email Address</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email-forgot"
                                    type="email"
                                    defaultValue={values.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Email Address"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        px: 2.75,
                                        py: 1.5
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </AnimateButton>
                        </Grid>
                    </Grid>
                    {touched.email && errors.email && (
                        <Box sx={{ mt: 1 }}>
                            <FormHelperText error id="standard-weight-helper-text-email-forgot">
                                {errors.email}
                            </FormHelperText>
                        </Box>
                    )}
                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}
                </form>
            )}
        </Formik>
    );
};

export default MailerSubscriber;
