import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { Button, Box, Grid, CardContent, LinearProgress, Rating, Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import ProductReview from 'ui-component/cards/ProductReview';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getProductReviews } from 'store/slices/product';

// assets
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';

// progress
function LinearProgressWithLabel({ like, star, color, value, ...others }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ minWidth: 50 }}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(star)} Stars`}</Typography>
            </Box>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress value={value} variant="determinate" color={color} {...others} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="subtitle1">{`(${Math.round(like)})`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    like: PropTypes.number,
    star: PropTypes.number,
    color: PropTypes.string,
    value: PropTypes.number
};

// ==============================|| PRODUCT DETAILS - REVIEWS ||============================== //

const ProductReviews = ({ product }) => {
    const dispatch = useDispatch();
    const [reviews, setReviews] = useState([]);
    const productState = useSelector((state) => state.product);

    useEffect(() => {
        setReviews(productState.reviews);
    }, [productState]);

    useEffect(() => {
        dispatch(getProductReviews());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={4}>
                <MainCard content={false} sx={{ height: '100%' }}>
                    <CardContent sx={{ height: '100%' }}>
                        {product && (
                            <Stack alignItems="center" justifyContent="center" spacing={2} sx={{ height: '100%' }}>
                                <Typography variant="subtitle1">Average Rating</Typography>
                                <Typography variant="h1" color="primary">
                                    {Number((product.rating < 4 ? product.rating + 1 : product.rating).toFixed(1))}/5
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Rating
                                        name="simple-controlled"
                                        value={product.rating < 4 ? product.rating + 1 : product.rating}
                                        icon={<StarTwoToneIcon fontSize="inherit" />}
                                        emptyIcon={<StarBorderTwoToneIcon fontSize="inherit" />}
                                        readOnly
                                        precision={0.1}
                                    />
                                    <Typography variant="caption">({product.salePrice + product.offerPrice})</Typography>
                                </Stack>
                            </Stack>
                        )}
                    </CardContent>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <MainCard content={false} sx={{ height: '100%' }}>
                    <CardContent>
                        <Grid container alignItems="center" justifyContent="space-between" spacing={1}>
                            <Grid item xs={12}>
                                <LinearProgressWithLabel color="secondary" star={1} value={15} like={125} />
                            </Grid>
                            <Grid item xs={12}>
                                <LinearProgressWithLabel color="secondary" star={2} value={15} like={125} />
                            </Grid>
                            <Grid item xs={12}>
                                <LinearProgressWithLabel color="secondary" star={3} value={20} like={160} />
                            </Grid>
                            <Grid item xs={12}>
                                <LinearProgressWithLabel color="secondary" star={4} value={40} like={320} />
                            </Grid>
                            <Grid item xs={12}>
                                <LinearProgressWithLabel color="secondary" star={5} value={10} like={80} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <MainCard content={false} sx={{ height: '100%' }}>
                    <CardContent sx={{ height: '100%' }}>
                        <Stack alignItems="center" justifyContent="center" spacing={2} sx={{ height: '100%' }}>
                            <Button variant="outlined" size="large" startIcon={<RateReviewTwoToneIcon fontSize="inherit" />}>
                                Write an Review
                            </Button>
                        </Stack>
                    </CardContent>
                </MainCard>
            </Grid>

            {reviews &&
                reviews.map((review, index) => (
                    <Grid item xs={12} key={index}>
                        <ProductReview
                            avatar={review.profile.avatar}
                            date={review.date}
                            name={review.profile.name}
                            status={review.profile.status}
                            rating={review.rating}
                            review={review.review}
                        />
                    </Grid>
                ))}
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="center">
                    <Button variant="text"> Load more Comments </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

ProductReviews.propTypes = {
    product: PropTypes.object
};

export default ProductReviews;
