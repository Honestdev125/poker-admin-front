import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    ButtonBase,
    ButtonGroup,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    MenuItem,
    Radio,
    RadioGroup,
    Rating,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

// third-party
import { useFormik, Form, FormikProvider, useField } from 'formik';
import * as yup from 'yup';

// project imports
import Chip from 'ui-component/extended/Chip';
import Avatar from 'ui-component/extended/Avatar';
import ColorOptions from '../ColorOptions';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { addProduct } from 'store/slices/cart';

// assets
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

// product color select
function getColor(color) {
    return ColorOptions.filter((item) => item.value === color);
}

// product size
const sizeOptions = [8, 10, 12, 14, 16, 18, 20];

const validationSchema = yup.object({
    color: yup.string().required('Color selection is required'),
    size: yup.number().required('Size selection is required.')
});

// ==============================|| COLORS OPTION ||============================== //

const Colors = ({ checked, colorsData }) => {
    const theme = useTheme();
    return (
        <Grid item>
            <Tooltip title={colorsData[0].label}>
                <ButtonBase sx={{ borderRadius: '50%' }}>
                    <Avatar
                        color="inherit"
                        size="badge"
                        sx={{
                            bgcolor: colorsData[0].bg,
                            color: theme.palette.mode === 'light' ? 'grey.50' : 'grey.800'
                        }}
                    >
                        {checked && (
                            <CircleIcon sx={{ color: theme.palette.mode === 'light' ? 'grey.50' : 'grey.800', fontSize: '0.75rem' }} />
                        )}
                        {!checked && <CircleIcon sx={{ color: colorsData[0].bg, fontSize: '0.75rem' }} />}
                    </Avatar>
                </ButtonBase>
            </Tooltip>
        </Grid>
    );
};

Colors.propTypes = {
    checked: PropTypes.bool,
    colorsData: PropTypes.array
};

const Increment = (props) => {
    const [field, , helpers] = useField(props);

    const { value } = field;
    const { setValue } = helpers;
    return (
        <ButtonGroup size="large" variant="text" color="inherit" sx={{ border: '1px solid', borderColor: 'grey.400' }}>
            <Button
                key="three"
                disabled={value <= 1}
                onClick={() => setValue(value - 1)}
                sx={{ pr: 0.75, pl: 0.75, minWidth: '0px !important' }}
                aria-label="decrease"
            >
                <RemoveIcon fontSize="inherit" />
            </Button>
            <Button key="two" sx={{ pl: 0.5, pr: 0.5 }}>
                {value}
            </Button>
            <Button
                key="one"
                onClick={() => setValue(value + 1)}
                sx={{ pl: 0.75, pr: 0.75, minWidth: '0px !important' }}
                aria-label="increase"
            >
                <AddIcon fontSize="inherit" />
            </Button>
        </ButtonGroup>
    );
};

// ==============================|| PRODUCT DETAILS - INFORMATION ||============================== //

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const cart = useSelector((state) => state.cart);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: product.id,
            name: product.name,
            image: product.image,
            salePrice: product.salePrice,
            offerPrice: product.offerPrice,
            color: '',
            size: '',
            quantity: 1
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(addProduct(values, cart.checkout.products));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Submit Success',
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );

            history('/e-commerce/checkout');
        }
    });

    const { values, errors, handleSubmit, handleChange } = formik;

    const addCart = () => {
        values.color = values.color ? values.color : 'primaryDark';
        values.size = values.size ? values.size : '8';
        dispatch(addProduct(values, cart.checkout.products));
        dispatch(
            openSnackbar({
                open: true,
                message: 'Add To Cart Success',
                variant: 'alert',
                alert: {
                    color: 'success'
                },
                close: false
            })
        );
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Chip
                                size="small"
                                label={product.isStock ? 'In Stock' : 'Out of Stock'}
                                chipcolor={product.isStock ? 'success' : 'error'}
                                sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography variant="h3">{product.name}</Typography>
                                <Chip size="small" label="New" chipcolor="primary" variant="outlined" />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Avatar variant="rounded" sx={{ bgcolor: 'grey.200', color: 'grey.800' }}>
                        <FavoriteBorderIcon />
                    </Avatar>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2">{product.description}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating
                        name="simple-controlled"
                        value={product.rating}
                        icon={<StarTwoToneIcon fontSize="inherit" />}
                        emptyIcon={<StarBorderTwoToneIcon fontSize="inherit" />}
                        precision={0.1}
                        readOnly
                    />
                    <Typography variant="caption">({product.salePrice}+)</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="h2" color="primary">
                        ${product.offerPrice}
                    </Typography>
                    <Typography variant="body1" sx={{ textDecoration: 'line-through' }}>
                        ${product.salePrice}
                    </Typography>
                    <Typography variant="caption">(Inclusive of all taxes)</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <FormikProvider value={formik}>
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={10}>
                                <Table>
                                    <TableBody sx={{ '& .MuiTableCell-root': { borderBottom: 'none' } }}>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="body2">
                                                    Colors{' '}
                                                    <Typography color="error" component="span">
                                                        *
                                                    </Typography>
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <RadioGroup
                                                    row
                                                    value={values.color}
                                                    onChange={handleChange}
                                                    aria-label="colors"
                                                    name="color"
                                                    id="color"
                                                    sx={{ ml: 1 }}
                                                >
                                                    {product.colors &&
                                                        product.colors.map((item, index) => {
                                                            const colorsData = getColor(item);
                                                            return (
                                                                <FormControlLabel
                                                                    key={index}
                                                                    value={item}
                                                                    control={
                                                                        <Radio
                                                                            sx={{ p: 0.25 }}
                                                                            disableRipple
                                                                            checkedIcon={<Colors checked colorsData={colorsData} />}
                                                                            icon={<Colors colorsData={colorsData} />}
                                                                        />
                                                                    }
                                                                    label=""
                                                                />
                                                            );
                                                        })}
                                                </RadioGroup>
                                                {errors.color && (
                                                    <FormHelperText error id="standard-label-color">
                                                        {errors.color}
                                                    </FormHelperText>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Stack>
                                                    <Typography variant="body2">
                                                        Size{' '}
                                                        <Typography color="error" component="span">
                                                            *
                                                        </Typography>
                                                    </Typography>
                                                    <Typography variant="caption" color="primary" component={Link} to="#">
                                                        Size Chart?
                                                    </Typography>
                                                </Stack>
                                            </TableCell>
                                            <TableCell align="left">
                                                <FormControl sx={{ minWidth: 120 }}>
                                                    <Select
                                                        id="size"
                                                        name="size"
                                                        value={values.size}
                                                        onChange={handleChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        {sizeOptions.map((option, index) => (
                                                            <MenuItem sx={{ p: 1.25 }} key={index} value={option}>
                                                                {option}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                                {errors.size && (
                                                    <FormHelperText error id="standard-label-size">
                                                        {errors.size}
                                                    </FormHelperText>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="body2">Quantity</Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Increment name="quantity" />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Button
                                            fullWidth
                                            color="primary"
                                            variant="contained"
                                            size="large"
                                            startIcon={<ShoppingCartTwoToneIcon />}
                                            onClick={addCart}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button type="submit" fullWidth color="secondary" variant="contained" size="large">
                                            Buy Now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                </FormikProvider>
            </Grid>
        </Grid>
    );
};

ProductInfo.propTypes = {
    product: PropTypes.object
};

export default ProductInfo;
