import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, ButtonBase, Box, Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';

// third-party
import Lightbox from 'react-18-image-lightbox';

// project imports
import { gridSpacing } from 'store/constant';
import useConfig from 'hooks/useConfig';
import MailerSubscriber from './MailerSubscriber';
import Slider from './Slider';

// assets
import { IconBrandDribbble } from '@tabler/icons';

import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

import logo from 'assets/images/logo.svg';
import logoDark from 'assets/images/logo-dark.svg';
import companyLogo from 'assets/images/maintenance/img-ct-logo.png';
import imageBackground from 'assets/images/maintenance/img-soon-bg.svg';
import imageGrid from 'assets/images/maintenance/img-soon-bg-grid.svg';
import imageDarkGrid from 'assets/images/maintenance/img-soon-bg-grid-dark.svg';
import imageSoon2 from 'assets/images/maintenance/img-soon-2.svg';
import imageSoon3 from 'assets/images/maintenance/img-soon-3.svg';
import imageSoon4 from 'assets/images/maintenance/img-soon-4.svg';
import imageSoon5 from 'assets/images/maintenance/img-soon-5.svg';
import imageSoon6 from 'assets/images/maintenance/img-soon-6.svg';
import imageSoon7 from 'assets/images/maintenance/img-soon-7.svg';
import imageSoon8 from 'assets/images/maintenance/img-soon-8.svg';
import imageSlider1 from 'assets/images/maintenance/img-slider-layout1.png';
import imageSlider2 from 'assets/images/maintenance/img-slider-layout2.png';
import imageSlider3 from 'assets/images/maintenance/img-slider-layout3.png';

// styles
const CardMediaWrapper = styled('div')(({ theme }) => ({
    maxWidth: 720,
    margin: '0 auto',
    position: 'relative',
    [theme.breakpoints.down('xl')]: {
        marginTop: 30
    },
    [theme.breakpoints.down('md')]: {
        maxWidth: 450
    },
    [theme.breakpoints.down('lg')]: {
        display: 'none'
    }
}));

const PageContentWrapper = styled('div')(({ theme }) => ({
    maxWidth: 550,
    margin: '0 0 0 auto',
    [theme.breakpoints.down('lg')]: {
        margin: '0 auto'
    },
    [theme.breakpoints.up(1400)]: {
        maxWidth: 600
    }
}));

const ComingSoonCard = styled(Card)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
        display: 'block'
    },
    [theme.breakpoints.up(1200)]: {
        overflow: 'hidden',
        maxHeight: '100vh'
    },
    [theme.breakpoints.up(1400)]: {
        alignItems: 'center'
    }
}));

const SliderWrapper = styled('div')(({ theme }) => ({
    borderRadius: '8px',
    width: 'calc(100% - 40px)',
    marginLeft: 40,
    height: 'calc(100% - 40px)',
    position: 'absolute',
    left: 0,
    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light
}));

const CardMediaGrid = styled('img')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 3
});

const CardMediaWidget = styled('img')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    animation: '5s wings ease-in-out infinite',
    zIndex: 5,
    '&:nth-of-type(3)': {
        animationDelay: '2s'
    },
    '&:nth-of-type(4)': {
        animationDelay: '1s'
    },
    '&:nth-of-type(5)': {
        animationDelay: '3s'
    },
    '&:nth-of-type(9)': {
        animationDelay: '5s'
    },
    '&:nth-of-type(10)': {
        animationDelay: '6s'
    },
    '&:nth-of-type(7)': {
        animation: '3s blink ease-in-out infinite',
        animationDelay: '1s'
    },
    '&:nth-of-type(6)': {
        animation: '3s blink ease-in-out infinite',
        animationDelay: '2s'
    }
});

// ===========================|| COMING SOON 1 ||=========================== //

const ComingSoon1 = () => {
    const theme = useTheme();

    const { rtlLayout } = useConfig();
    const [photoIndex, setPhotoIndex] = React.useState(0);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (slideIndex) => {
        setOpen(true);
        setPhotoIndex(slideIndex);
    };

    const images = [imageSlider1, imageSlider2, imageSlider3];

    return (
        <ComingSoonCard>
            <CardContent sx={{ p: 0 }}>
                <CardContent sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        image={imageBackground}
                        title="Slider5 image"
                        sx={{
                            position: 'absolute',
                            bottom: -40,
                            left: 50,
                            width: 400,
                            transform: 'rotate(145deg)'
                        }}
                    />
                    {theme.palette.mode === 'light' && (
                        <img
                            src={logo}
                            alt="Berry"
                            width="100"
                            style={{ position: rtlLayout ? 'relative' : 'initial', top: rtlLayout ? 30 : 'initial' }}
                        />
                    )}
                    {theme.palette.mode === 'dark' && (
                        <img
                            src={logoDark}
                            alt="Berry"
                            width="100"
                            style={{ position: rtlLayout ? 'relative' : 'initial', top: rtlLayout ? 30 : 'initial' }}
                        />
                    )}
                </CardContent>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <CardMediaWrapper>
                            <CardMedia
                                component="img"
                                image={imageBackground}
                                title="Slider5 image"
                                sx={{ position: 'relative', zIndex: 1 }}
                            />
                            <CardMediaGrid src={theme.palette.mode === 'dark' ? imageDarkGrid : imageGrid} title="Slider5 image" />
                            <CardMediaWidget src={imageSoon2} title="Slider5 image" />
                            <CardMediaWidget src={imageSoon3} title="Slider5 image" />
                            <CardMediaWidget src={imageSoon4} title="Slider5 image" />
                            <CardMediaWidget src={imageSoon5} title="Slider5 image" />
                            <CardMediaWidget src={imageSoon6} title="Slider5 image" />
                            <CardMediaWidget src={imageSoon7} title="Slider5 image" />
                            <CardMediaWidget src={imageSoon8} title="Slider5 image" />
                        </CardMediaWrapper>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent sx={{ padding: { xs: 3, xl: 10 }, margin: '0 auto' }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <PageContentWrapper>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Typography variant="h2" component="div" color="primary">
                                        Coming Soon
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h1" component="div">
                                                Berry - The React Admin Template
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography sx={{ fontSize: '1.125rem' }}>
                                                Presenting Material-UI based React Dashboard Template to build performance centric websites
                                                and applications.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item>
                                            <Typography
                                                variant="h5"
                                                component="div"
                                                color="secondary"
                                                sx={{ display: 'flex', alignItems: 'center' }}
                                            >
                                                <FiberManualRecordTwoToneIcon sx={{ mr: 0.625, fontSize: '1rem' }} />
                                                Flexible & Fast
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="h5"
                                                component="div"
                                                color="secondary"
                                                sx={{ display: 'flex', alignItems: 'center' }}
                                            >
                                                <FiberManualRecordTwoToneIcon sx={{ mr: 0.625, fontSize: '1rem' }} />
                                                Material UI
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="h5"
                                                component="div"
                                                color="secondary"
                                                sx={{ display: 'flex', alignItems: 'center' }}
                                            >
                                                <FiberManualRecordTwoToneIcon sx={{ mr: 0.625, fontSize: '1rem' }} />
                                                Javascript / Typescript
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <MailerSubscriber />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                                        <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
                                            <SliderWrapper />
                                            <Box
                                                sx={{
                                                    width: 'calc(100% - 20px)',
                                                    mt: 2.5,
                                                    boxShadow: '0px 45px 45px rgba(30, 136, 229, 0.2)',
                                                    borderRadius: '8px',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                <Slider handleClickOpen={handleClickOpen} />
                                            </Box>
                                            {open && (
                                                <Lightbox
                                                    mainSrc={images[photoIndex]}
                                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                                    onCloseRequest={() => setOpen(false)}
                                                    onMovePrevRequest={() =>
                                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                                    }
                                                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                                />
                                            )}
                                        </Grid>
                                        <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
                                            <Grid container justifyContent="space-between" spacing={gridSpacing}>
                                                <Grid item xs={12}>
                                                    <Grid container justifyContent="flex-end" spacing={1}>
                                                        <Grid item>
                                                            <ButtonBase
                                                                component={Link}
                                                                href="https://links.codedthemes.com/HTIBc"
                                                                target="_blank"
                                                                aria-label="blog"
                                                            >
                                                                <Avatar
                                                                    sx={{
                                                                        ...theme.typography.commonAvatar,
                                                                        ...theme.typography.mediumAvatar,
                                                                        bgcolor:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.dark.main
                                                                                : theme.palette.secondary.light,
                                                                        color:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.secondary.main
                                                                                : theme.palette.secondary.dark
                                                                    }}
                                                                >
                                                                    <BookIcon />
                                                                </Avatar>
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid item>
                                                            <ButtonBase
                                                                component={Link}
                                                                href="https://www.facebook.com/codedthemes"
                                                                target="_blank"
                                                                aria-label="facebook"
                                                            >
                                                                <Avatar
                                                                    sx={{
                                                                        ...theme.typography.commonAvatar,
                                                                        ...theme.typography.mediumAvatar,
                                                                        bgcolor:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.dark.main
                                                                                : theme.palette.primary.light,
                                                                        color:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.primary.main
                                                                                : theme.palette.primary.dark
                                                                    }}
                                                                >
                                                                    <FacebookIcon />
                                                                </Avatar>
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid item>
                                                            <ButtonBase
                                                                component={Link}
                                                                href="https://twitter.com/codedthemes"
                                                                target="_blank"
                                                                aria-label="twitter"
                                                            >
                                                                <Avatar
                                                                    sx={{
                                                                        ...theme.typography.commonAvatar,
                                                                        ...theme.typography.mediumAvatar,
                                                                        bgcolor:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.dark.main
                                                                                : theme.palette.warning.light,
                                                                        color:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.warning.dark
                                                                                : theme.palette.warning.dark
                                                                    }}
                                                                >
                                                                    <TwitterIcon />
                                                                </Avatar>
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid item>
                                                            <ButtonBase
                                                                component={Link}
                                                                href="https://github.com/codedthemes"
                                                                target="_blank"
                                                                aria-label="github"
                                                            >
                                                                <Avatar
                                                                    sx={{
                                                                        ...theme.typography.commonAvatar,
                                                                        ...theme.typography.mediumAvatar,
                                                                        bgcolor:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.dark.main
                                                                                : theme.palette.grey[200],
                                                                        color:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.dark.light
                                                                                : theme.palette.grey[800]
                                                                    }}
                                                                >
                                                                    <GitHubIcon />
                                                                </Avatar>
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid item>
                                                            <ButtonBase
                                                                component={Link}
                                                                href="https://dribbble.com/codedthemes"
                                                                target="_blank"
                                                                aria-label="dribble"
                                                            >
                                                                <Avatar
                                                                    sx={{
                                                                        ...theme.typography.commonAvatar,
                                                                        ...theme.typography.mediumAvatar,
                                                                        bgcolor:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.dark.main
                                                                                : theme.palette.grey[100],
                                                                        color:
                                                                            theme.palette.mode === 'dark'
                                                                                ? theme.palette.grey[600]
                                                                                : theme.palette.grey[500]
                                                                    }}
                                                                >
                                                                    <IconBrandDribbble />
                                                                </Avatar>
                                                            </ButtonBase>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container alignItems="center" justifyContent="flex-end" spacing={1}>
                                                        <Grid item>
                                                            <Typography variant="body1" align="right" component="div">
                                                                Project By
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <img src={companyLogo} alt="Berry" width="128" />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </PageContentWrapper>
                    </Grid>
                </Grid>
            </CardContent>
        </ComingSoonCard>
    );
};

export default ComingSoon1;
