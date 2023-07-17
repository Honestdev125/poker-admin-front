import React from 'react';

// material-ui
import { Button, Grid, Typography } from '@mui/material';

// project imports
import GalleryCard from 'ui-component/cards/GalleryCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getGallery } from 'store/slices/user';

// ==============================|| SOCIAL PROFILE - GALLERY ||============================== //

const Gallery = () => {
    const dispatch = useDispatch();
    const [gallery, setGallery] = React.useState([]);
    const userState = useSelector((state) => state.user);
    React.useEffect(() => {
        setGallery(userState.gallery);
    }, [userState]);

    React.useEffect(() => {
        dispatch(getGallery());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let galleryResult = <></>;
    if (gallery) {
        galleryResult = gallery.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <GalleryCard {...item} />
            </Grid>
        ));
    }

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Gallery</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary">
                            Add Photos
                        </Button>
                    </Grid>
                </Grid>
            }
        >
            <Grid container direction="row" spacing={gridSpacing}>
                {galleryResult}
            </Grid>
        </MainCard>
    );
};

export default Gallery;
