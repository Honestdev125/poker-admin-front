import React, { useEffect } from 'react';
import { useDispatch } from 'store';
import { useNavigate, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import { openSnackbar } from 'store/slices/snackbar';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicatorNumFunc } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'utils/axios';

// ========================|| FIREBASE - RESET PASSWORD ||======================== //

const AuthResetPassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const [showPassword, setShowPassword] = React.useState(false);
    const [strength, setStrength] = React.useState(0);
    const [level, setLevel] = React.useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchValue = location.search.slice(1);

    // const { firebaseEmailPasswordSignIn } = useAuth();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicatorNumFunc(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Formik
            initialValues={{
                password: '',
                confirmPassword: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                password: Yup.string().max(255).required('Password is required'),
                confirmPassword: Yup.string()
                    .when('password', {
                        is: (val) => !!(val && val.length > 0),
                        then: Yup.string().oneOf([Yup.ref('password')], 'Both Password must be match!')
                    })
                    .required('Please confirm password!')
            })}
            onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
                const createValue = { ...values, encode: searchValue };
                delete createValue.confirmPassword;
                axios
                    .post('/auth/resetpassword', createValue)
                    .then((response) => {
                        console.log(response);
                        if (response) {
                            setStatus({ success: true });
                            setSubmitting(false);
                            dispatch(
                                openSnackbar({
                                    open: true,
                                    message: 'Your password has been reset successfully',
                                    variant: 'alert',
                                    alert: {
                                        color: 'success'
                                    },
                                    close: false
                                })
                            );
                            setTimeout(() => {
                                navigate('/login', { replace: true });
                            }, 1500);
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: error.message });
                            setSubmitting(false);
                        }
                    });
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <Grid item sx={{ height: '100px' }}>
                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{}}
                            />
                        </FormControl>
                        {touched.password && errors.password && (
                            <FormControl fullWidth>
                                <FormHelperText error id="standard-weight-helper-text-reset">
                                    {errors.password}
                                </FormHelperText>
                            </FormControl>
                        )}
                    </Grid>
                    <Grid item sx={{ height: '100px' }}>
                        <FormControl
                            fullWidth
                            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-confirm-password"
                                type="password"
                                value={values.confirmPassword}
                                name="confirmPassword"
                                label="Confirm Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                        </FormControl>
                        {touched.confirmPassword && errors.confirmPassword && (
                            <FormControl fullWidth>
                                <FormHelperText error id="standard-weight-helper-text-reset">
                                    {errors.confirmPassword}
                                </FormHelperText>
                            </FormControl>
                        )}
                    </Grid>
                    <Grid item sx={{ height: '40px' }}>
                        {strength !== -1 && (
                            <FormControl fullWidth>
                                <Box>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box
                                                style={{ backgroundColor: level?.color }}
                                                sx={{
                                                    width: 85,
                                                    height: 8,
                                                    borderRadius: '7px'
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}
                    </Grid>
                    <Box
                        sx={{
                            mt: 1
                        }}
                    >
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                Reset Password
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default AuthResetPassword;
