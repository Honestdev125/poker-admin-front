// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';

// assets
import GridViewIcon from '@mui/icons-material/GridView';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

// =============================|| LANDING - CARD SECTION ||============================= //

const CardSection = () => {
    const theme = useTheme();
    const cardSX = {
        overflow: 'hidden',
        position: 'relative',
        border: 'none',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: 150,
            height: 150,
            border: `35px solid ${theme.palette.background.paper}`,
            opacity: theme.palette.mode === 'dark' ? 0.1 : 0.4,
            borderRadius: '50%',
            top: -72,
            right: -63
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 150,
            height: 150,
            border: `2px solid ${theme.palette.background.paper}`,
            opacity: theme.palette.mode === 'dark' ? 0.05 : 0.21,
            borderRadius: '50%',
            top: -97,
            right: -3
        },
        '& .MuiCardContent-root': {
            padding: '20px 38px 20px 30px'
        }
    };
    return (
        <Container>
            <Grid container justifyContent="center" spacing={{ xs: 3, sm: 5 }} sx={{ textAlign: 'center' }}>
                <Grid item md={4} sm={6} xs={12}>
                    <FadeInWhenVisible>
                        <SubCard sx={{ bgcolor: 'warning.main', ...cardSX }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        background: theme.palette.background.paper,
                                        opacity: theme.palette.mode === 'dark' ? 1 : 0.5,
                                        color: theme.palette.warning.main,
                                        height: 60,
                                        width: 60,
                                        borderRadius: '12px'
                                    }}
                                >
                                    <GridViewIcon sx={{ fontSize: '2.25rem', transform: 'rotate(45deg)' }} />
                                </Avatar>
                                <Stack alignItems="flex-end">
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontWeight: 800,
                                            fontSize: '2.5rem',
                                            zIndex: '99',
                                            color: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.grey[900]
                                        }}
                                    >
                                        150+
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '1.120rem',
                                            textAlign: 'end',
                                            color: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.grey[900]
                                        }}
                                    >
                                        Components
                                    </Typography>
                                </Stack>
                            </Stack>
                        </SubCard>
                    </FadeInWhenVisible>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <FadeInWhenVisible>
                        <SubCard sx={{ bgcolor: theme.palette.primary[200], ...cardSX }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        background: theme.palette.background.paper,
                                        color: theme.palette.primary.main,
                                        opacity: theme.palette.mode === 'dark' ? 1 : 0.5,
                                        height: 60,
                                        width: 60,
                                        borderRadius: '12px'
                                    }}
                                >
                                    <WidgetsOutlinedIcon sx={{ fontSize: '2.25rem' }} />
                                </Avatar>
                                <Stack alignItems="flex-end">
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontWeight: 800,
                                            fontSize: '2.5rem',
                                            zIndex: '99',
                                            color: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.grey[900]
                                        }}
                                    >
                                        8+
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '1.120rem',
                                            textAlign: 'end',
                                            color: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.grey[900]
                                        }}
                                    >
                                        Application
                                    </Typography>
                                </Stack>
                            </Stack>
                        </SubCard>
                    </FadeInWhenVisible>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <FadeInWhenVisible>
                        <SubCard sx={{ bgcolor: theme.palette.secondary[200], ...cardSX }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        background: theme.palette.background.paper,
                                        opacity: theme.palette.mode === 'dark' ? 1 : 0.5,
                                        color: theme.palette.secondary.main,
                                        height: 60,
                                        width: 60,
                                        borderRadius: '12px'
                                    }}
                                >
                                    <WebOutlinedIcon sx={{ fontSize: '2.25rem' }} />
                                </Avatar>
                                <Stack alignItems="flex-end">
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: '2.5rem',
                                            zIndex: '99',
                                            color: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.grey[900]
                                        }}
                                    >
                                        100+
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontSize: '1.120rem',
                                            textAlign: 'end',
                                            color: theme.palette.mode === 'dark' ? theme.palette.dark[900] : theme.palette.grey[900]
                                        }}
                                    >
                                        Pages
                                    </Typography>
                                </Stack>
                            </Stack>
                        </SubCard>
                    </FadeInWhenVisible>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CardSection;
