import { useDispatch } from 'store';

// material-ui
import { Button, Grid, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

/**
 * 'Enter your email'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
    emailInstant: yup.string().email('Enter a valid email').required('Email is required'),
    passwordInstant: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required')
});

// ==============================|| FORM VALIDATION - INSTANT FEEDBACK FORMIK  ||============================== //

const InstantFeedback = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            emailInstant: '',
            passwordInstant: ''
        },
        validationSchema,
        onSubmit: () => {
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'On Leave - Submit Success',
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
        <MainCard title="On Leave">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="emailInstant"
                            name="emailInstant"
                            label="Email"
                            value={formik.values.emailInstant}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.emailInstant && Boolean(formik.errors.emailInstant)}
                            helperText={formik.touched.emailInstant && formik.errors.emailInstant}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="passwordInstant"
                            name="passwordInstant"
                            label="Password"
                            type="password"
                            value={formik.values.passwordInstant}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.passwordInstant && Boolean(formik.errors.passwordInstant)}
                            helperText={formik.touched.passwordInstant && formik.errors.passwordInstant}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="flex-end">
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
    );
};

export default InstantFeedback;
