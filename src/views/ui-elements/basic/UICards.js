// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from '@mui/material';

// project imports
import UserDetailsCard from 'ui-component/cards/UserDetailsCard';
import UserProfileCard from 'ui-component/cards/UserProfileCard';
import UserSimpleCard from 'ui-component/cards/UserSimpleCard';
import FollowerCard from 'ui-component/cards/FollowerCard';
import FriendsCard from 'ui-component/cards/FriendsCard';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import Card1 from 'assets/images/cards/card-1.jpg';
import Card2 from 'assets/images/cards/card-2.jpg';
import Card3 from 'assets/images/cards/card-3.jpg';

const userDetails = {
    id: '#1Card_Phoebe',
    avatar: 'avatar-2.png',
    name: 'Gaetano',
    role: 'Investor Division Strategist',
    about: 'Try to connect the SAS transmitter, maybe it will index the optical hard drive!',
    email: 'alia_shields25@yahoo.com',
    contact: '253-418-5940',
    location: 'Herminahaven'
};

const userProfile = {
    id: '#9Card_Madyson',
    avatar: 'avatar-5.png',
    profile: 'profile-back-9.png',
    name: 'Madyson',
    role: 'Product Tactics Facilitator',
    status: 'Active'
};

const simpleCard = {
    id: '#6Card_Joanne',
    avatar: 'avatar-6.png',
    name: 'Joanne',
    status: 'Active'
};

const friend = {
    id: '#4Friends_Henderson',
    avatar: 'avatar-4.png',
    name: 'Henderson',
    location: 'South Antonina'
};

const follower = {
    id: '#4Followers_Henderson',
    avatar: 'avatar-8.png',
    name: 'Henderson',
    location: 'South Antonina',
    follow: 1
};

// ===============================|| UI CARDS ||=============================== //

const UICards = () => {
    const theme = useTheme();
    const cardStyle = {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100]
    };

    return (
        <>
            <MainCard title="Cards" secondary={<SecondaryAction link="https://next.material-ui.com/components/cards/" />}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Basic Card Style 3">
                            <UserSimpleCard {...simpleCard} />
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Basic Card Style 4">
                            <FriendsCard {...friend} />
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Basic Card Style 5">
                            <FollowerCard {...follower} />
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Basic Card Style 1">
                            <UserDetailsCard {...userDetails} />
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Basic Card Style 2">
                            <UserProfileCard {...userProfile} />
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>

            <MainCard
                title="Cards"
                secondary={<SecondaryAction link="https://next.material-ui.com/components/cards/" />}
                sx={{ mt: gridSpacing }}
            >
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Body Content">
                            <Card sx={cardStyle}>
                                <CardContent>
                                    <Typography variant="subtitle2">This is some text within a card body.</Typography>
                                </CardContent>
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Titles, Text, and Links">
                            <Card sx={cardStyle}>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant="h5" sx={{ color: theme.palette.text.dark }}>
                                                Card Title
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">Card Subtitle</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                Some quick example text to build on the card title and make up the bulk of the card&apos;s
                                                content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button variant="text">Card Link</Button>
                                    <Button variant="text" color="secondary">
                                        Another
                                    </Button>
                                </CardActions>
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Header and Footer">
                            <Card sx={cardStyle}>
                                <CardHeader title="Featured" />
                                <Divider />
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title treatment</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Button variant="contained">Go Somewhere</Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Left Align (Default)">
                            <Card sx={cardStyle}>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title treatment</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container>
                                        <Grid item>
                                            <Button variant="contained">Go Somewhere</Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Center Align">
                            <Card sx={cardStyle}>
                                <CardContent>
                                    <Grid container spacing={1} justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title treatment</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <Button variant="contained">Go Somewhere</Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Right Align">
                            <Card sx={cardStyle}>
                                <CardContent>
                                    <Grid container spacing={1} justifyContent="flex-end" alignItems="flex-end">
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title treatment</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2" align="right">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Button variant="contained">Go Somewhere</Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Image Cap">
                            <Card sx={cardStyle}>
                                <CardMedia component="img" image={Card1} title="Card 1" />
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container>
                                        <Grid item>
                                            <Typography variant="caption">Last updated 3 mins ago</Typography>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Image Cap">
                            <Card sx={cardStyle}>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container>
                                        <Grid item>
                                            <Typography variant="caption">Last updated 3 mins ago</Typography>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                                <CardMedia component="img" image={Card2} title="Card 2" />
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SubCard title="Image Overlay">
                            <Card sx={cardStyle}>
                                <CardMedia image={Card3} title="Card 3">
                                    <CardContent sx={{ minHeight: 240, color: theme.palette.common.white }}>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Special title
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle2" color="inherit">
                                                    With supporting text below as a natural lead-in to additional content.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Grid container>
                                            <Grid item>
                                                <Typography variant="caption">Last updated 3 mins ago</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardActions>
                                </CardMedia>
                            </Card>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12}>
                        <SubCard title="Color Card">
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.background.paper }}>
                                        <CardHeader
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.background.paper }}>
                                                    Primary
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Primary Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ bgcolor: theme.palette.secondary.main, color: theme.palette.secondary.light }}>
                                        <CardHeader
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.secondary.light }}>
                                                    Secondary
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Secondary Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ bgcolor: theme.palette.error.main, color: theme.palette.background.paper }}>
                                        <CardHeader
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.background.paper }}>
                                                    Error
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Error Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ bgcolor: theme.palette.success.dark, color: theme.palette.background.paper }}>
                                        <CardHeader
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.background.paper }}>
                                                    Success
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Success Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ bgcolor: theme.palette.warning.dark, color: theme.palette.grey[800] }}>
                                        <CardHeader
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.grey[800] }}>
                                                    Warning
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Warning Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ bgcolor: theme.palette.info.main, color: theme.palette.background.paper }}>
                                        <CardHeader
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.background.paper }}>
                                                    Info
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Info Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ bgcolor: theme.palette.dark.main, color: '#fff' }}>
                                        <CardHeader
                                            title={
                                                <Typography variant="h5" sx={{ color: '#fff' }}>
                                                    Dark
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Dark Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12}>
                        <SubCard title="Outlined Card">
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ border: `1px solid ${theme.palette.primary.main}` }}>
                                        <CardHeader
                                            sx={{ borderBottom: `1px solid ${theme.palette.primary.main}` }}
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
                                                    Primary
                                                </Typography>
                                            }
                                        />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Primary Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ border: `1px solid ${theme.palette.secondary.main}` }}>
                                        <CardHeader
                                            sx={{ borderBottom: `1px solid ${theme.palette.secondary.main}` }}
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.secondary.main }}>
                                                    Secondary
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Secondary Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ border: `1px solid ${theme.palette.error.main}` }}>
                                        <CardHeader
                                            sx={{ borderBottom: `1px solid ${theme.palette.error.main}` }}
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.error.main }}>
                                                    Error
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Error Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ border: `1px solid ${theme.palette.orange.main}` }}>
                                        <CardHeader
                                            sx={{ borderBottom: `1px solid ${theme.palette.orange.main}` }}
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.orange.main }}>
                                                    Orange
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Orange Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ border: `1px solid ${theme.palette.success.main}` }}>
                                        <CardHeader
                                            sx={{ borderBottom: `1px solid ${theme.palette.success.main}` }}
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.success.main }}>
                                                    Success
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Success Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ border: `1px solid ${theme.palette.warning.main}` }}>
                                        <CardHeader
                                            sx={{ borderBottom: `1px solid ${theme.palette.warning.main}` }}
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.warning.main }}>
                                                    Warning
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Warning Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ border: `1px solid ${theme.palette.info.main}` }}>
                                        <CardHeader
                                            sx={{ borderBottom: `1px solid ${theme.palette.info.main}` }}
                                            title={
                                                <Typography variant="h5" sx={{ color: theme.palette.info.main }}>
                                                    Info
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Info Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card sx={{ border: `1px solid ${theme.palette.dark.main}` }}>
                                        <CardHeader
                                            sx={{ borderBottom: `1px solid ${theme.palette.dark.main}` }}
                                            title={
                                                <Typography
                                                    variant="h5"
                                                    sx={{ color: theme.palette.mode === 'dark' ? 'dark.light' : theme.palette.dark.main }}
                                                >
                                                    Dark
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Dark Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card&apos;s content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default UICards;
