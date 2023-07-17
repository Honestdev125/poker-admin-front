import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import {
    Button,
    CardContent,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Rating,
    Skeleton,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// project imports
import Colors from './Colors';
import MainCard from 'ui-component/cards/MainCard';
import Accordion from 'ui-component/extended/Accordion';
import { gridSpacing } from 'store/constant';

// ==============================|| PRODUCT GRID GENDER FILTER ||============================== //

const Gender = ({ gender, handelFilter }) => {
    const [isGenderLoading, setGenderLoading] = useState(true);
    useEffect(() => {
        setGenderLoading(false);
    }, []);

    return (
        <Stack direction="row" alignItems="center">
            {isGenderLoading ? (
                <Skeleton variant="rectangular" width="100%" height={42} />
            ) : (
                <>
                    <FormControlLabel
                        control={<Checkbox checked={gender.some((item) => item === 'male')} />}
                        onChange={() => handelFilter('gender', 'male')}
                        label="Male"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={gender.some((item) => item === 'female')}
                                onChange={() => handelFilter('gender', 'female')}
                                color="secondary"
                            />
                        }
                        label="Female"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={gender.some((item) => item === 'kids')}
                                onChange={() => handelFilter('gender', 'kids')}
                                color="error"
                            />
                        }
                        label="Kids"
                    />
                </>
            )}
        </Stack>
    );
};

Gender.propTypes = {
    gender: PropTypes.array,
    handelFilter: PropTypes.func
};

// ==============================|| PRODUCT GRID - CATEGORIES FILTER ||============================== //

const Categories = ({ categories, handelFilter }) => {
    const [isCategoriesLoading, setCategoriesLoading] = useState(true);
    useEffect(() => {
        setCategoriesLoading(false);
    }, []);

    return (
        <Grid container spacing={1}>
            {isCategoriesLoading ? (
                <Grid item xs={12}>
                    <Skeleton variant="rectangular" width="100%" height={96} />
                </Grid>
            ) : (
                <>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox checked={categories.some((item) => item === 'all')} />}
                            onChange={() => handelFilter('categories', 'all')}
                            label="All"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={categories.some((item) => item === 'electronics')} />}
                            onChange={() => handelFilter('categories', 'electronics')}
                            label="Electronics"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={categories.some((item) => item === 'fashion')} />}
                            onChange={() => handelFilter('categories', 'fashion')}
                            label="Fashion"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox checked={categories.some((item) => item === 'kitchen')} />}
                            onChange={() => handelFilter('categories', 'kitchen')}
                            label="Kitchen"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={categories.some((item) => item === 'books')} />}
                            onChange={() => handelFilter('categories', 'books')}
                            label="Books"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={categories.some((item) => item === 'toys')} />}
                            onChange={() => handelFilter('categories', 'toys')}
                            label="Toys"
                        />
                    </Grid>
                </>
            )}
        </Grid>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
    handelFilter: PropTypes.func
};

// ==============================|| PRODUCT GRID - PRICE FILTER ||============================== //

const Price = ({ price, handelFilter }) => {
    const [isPriceLoading, setPriceLoading] = useState(true);
    useEffect(() => {
        setPriceLoading(false);
    }, []);

    return (
        <>
            {isPriceLoading ? (
                <Skeleton variant="rectangular" width="100%" height={172} />
            ) : (
                <FormControl component="fieldset">
                    <RadioGroup
                        row
                        aria-label="layout"
                        value={price}
                        onChange={(e) => handelFilter('price', e.target.value)}
                        name="row-radio-buttons-group"
                    >
                        <Grid container spacing={0.25}>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    value="0-10"
                                    control={<Radio />}
                                    label="Below $10"
                                    sx={{
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    value="10-50"
                                    control={<Radio />}
                                    label="$10 - $50"
                                    sx={{
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    value="50-100"
                                    control={<Radio />}
                                    label="$50 - $100"
                                    sx={{
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    value="100-150"
                                    control={<Radio />}
                                    label="$100 - $150"
                                    sx={{
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    value="150-200"
                                    control={<Radio />}
                                    label="$150 - $200"
                                    sx={{
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    value="200-99999"
                                    control={<Radio />}
                                    label="Over $200"
                                    sx={{
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        '& .MuiFormControlLabel-label': { color: 'grey.900' }
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            )}
        </>
    );
};

Price.propTypes = {
    price: PropTypes.string,
    handelFilter: PropTypes.func
};

// ==============================|| PRODUCT GRID - RATING FILTER ||============================== //

const RatingSection = ({ rating, handelFilter }) => {
    const [isRatingLoading, setRatingLoading] = useState(true);
    useEffect(() => {
        setRatingLoading(false);
    }, []);

    return (
        <>
            {isRatingLoading ? (
                <Skeleton variant="rectangular" width="100%" height={172} />
            ) : (
                <Stack direction="row" spacing={1} alignItems="center">
                    <Rating
                        precision={0.5}
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => handelFilter('rating', '', newValue)}
                    />
                    <Typography component="legend">({rating})</Typography>
                </Stack>
            )}
        </>
    );
};

RatingSection.propTypes = {
    rating: PropTypes.number,
    handelFilter: PropTypes.func
};

// ==============================|| PRODUCT GRID - FILTER ||============================== //

const ProductFilter = ({ filter, handelFilter }) => {
    const matchDownLG = useMediaQuery((theme) => theme.breakpoints.down('xl'));

    const filterData = [
        {
            id: 'gender',
            defaultExpand: true,
            title: 'Gender',
            content: <Gender gender={filter.gender} handelFilter={handelFilter} />
        },
        {
            id: 'categories',
            defaultExpand: true,
            title: 'Categories',
            content: <Categories categories={filter.categories} handelFilter={handelFilter} />
        },
        {
            id: 'colors',
            defaultExpand: true,
            title: 'Colors',
            content: <Colors colors={filter.colors} handelFilter={handelFilter} />
        },
        {
            id: 'price',
            defaultExpand: true,
            title: 'Price',
            content: <Price price={filter.price} handelFilter={handelFilter} />
        },
        {
            id: 'rating',
            defaultExpand: true,
            title: 'Rating',
            content: <RatingSection rating={filter.rating} handelFilter={handelFilter} />
        }
    ];

    return (
        <MainCard border={!matchDownLG} content={false} sx={{ overflow: 'visible' }}>
            <CardContent sx={{ p: 1, height: matchDownLG ? '100vh' : 'auto' }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Accordion data={filterData} />
                    </Grid>
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <Button variant="contained" fullWidth color="error" onClick={() => handelFilter('reset', '')}>
                                Clear All
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </MainCard>
    );
};

ProductFilter.propTypes = {
    filter: PropTypes.object,
    handelFilter: PropTypes.func
};

export default ProductFilter;
