import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, CardMedia, Grid, useMediaQuery } from '@mui/material';

// project import
import MainCard from 'ui-component/cards/MainCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// third-party
import Slider from 'react-slick';
import Lightbox from 'react-18-image-lightbox';

// assets
import prod1 from 'assets/images/e-commerce/prod-1.png';
import prod2 from 'assets/images/e-commerce/prod-2.png';
import prod3 from 'assets/images/e-commerce/prod-3.png';
import prod4 from 'assets/images/e-commerce/prod-4.png';
import prod5 from 'assets/images/e-commerce/prod-5.png';
import prod6 from 'assets/images/e-commerce/prod-6.png';
import prod7 from 'assets/images/e-commerce/prod-7.png';
import prod8 from 'assets/images/e-commerce/prod-8.png';
import useConfig from 'hooks/useConfig';

const prodImage = require.context('assets/images/e-commerce', true);

// ==============================|| PRODUCT DETAILS - IMAGES ||============================== //

const ProductImages = ({ product }) => {
    const theme = useTheme();
    const { borderRadius } = useConfig();
    const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8];

    const matchDownLG = useMediaQuery(theme.breakpoints.up('lg'));
    const initialImage = product.image ? prodImage(`./${product.image}`) : '';

    const [selected, setSelected] = useState(initialImage);
    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8];

    const lgNo = matchDownLG ? 4 : 3;

    const settings = {
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '0px',
        slidesToShow: products.length > 3 ? lgNo : products.length
    };

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
                <Grid item xs={12}>
                    <MainCard content={false} sx={{ m: '0 auto' }}>
                        <CardMedia
                            onClick={() => {
                                setModal(!modal);
                                setIsOpen(true);
                            }}
                            component="img"
                            image={selected}
                            sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', cursor: 'zoom-in' }}
                            alt="product images"
                        />
                    </MainCard>
                </Grid>
                <Grid item xs={11} sm={7} md={9} lg={10} xl={8}>
                    <Slider {...settings}>
                        {products.map((item, index) => (
                            <Box
                                key={index}
                                onClick={() => {
                                    setSelected(item);
                                    setPhotoIndex(index);
                                }}
                                sx={{ p: 1 }}
                            >
                                <Avatar
                                    outline={selected === item}
                                    size={matchDownLG ? 'lg' : 'md'}
                                    color="primary"
                                    src={item}
                                    variant="rounded"
                                    sx={{ m: '0 auto', cursor: 'pointer' }}
                                    alt="product images"
                                />
                            </Box>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </>
    );
};

ProductImages.propTypes = {
    product: PropTypes.object
};

export default ProductImages;
