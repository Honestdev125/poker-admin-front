// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardMedia, Container, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { IconCircleCheck } from '@tabler/icons';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';

import LayerLeft from 'assets/images/landing/customization-left.png';
import LayerRight from 'assets/images/landing/customization-right.png';

// ==============================|| LANDING - CUSTOMIZE ||============================== //

const CustomizeSection = () => {
    const theme = useTheme();
    const listSX = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        padding: '10px 0',
        fontSize: '1rem',
        color: theme.palette.grey[900],
        svg: { color: theme.palette.secondary.main }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 1.5, sm: 2.5, md: 3, lg: 5 }}>
                <Grid item xs={12} md={6} sx={{ img: { width: '100%' } }}>
                    <Stack sx={{ width: '75%', mb: 5, mx: 'auto' }}>
                        <CardMedia component="img" image={LayerLeft} alt="Layer" />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2.5}>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                Easy Developer Experience
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.primary"
                                sx={{
                                    fontSize: '1rem',
                                    zIndex: '99',
                                    width: { xs: '100%', sm: '100%', md: 'calc(100% - 20%)' }
                                }}
                            >
                                Berry has made it easy for developers of any skill level to use their product.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />A straightforward and simple folder structure.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Code that is organized in a clear and logical manner.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Setting up Typography and Color schemes is easy and effortless.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Multiple layout options that can be easily adjusted.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />A theme that can be easily configured on a single page.
                            </Typography>
                            {/* <Stack direction="row">
                                <AnimateButton>
                                    <Button
                                        startIcon={<LayersTwoToneIcon />}
                                        sx={{ boxShadow: 'none', my: 4 }}
                                        variant="contained"
                                        component={RouterLink}
                                        to="/components/autocomplete"
                                        target="_blank"
                                    >
                                        View All Components
                                    </Button>
                                </AnimateButton>
                            </Stack> */}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2.5} direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2.5}>
                                <Grid item xs={12}>
                                    <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                        Figma Design System
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.primary"
                                        sx={{
                                            fontSize: '1rem',
                                            zIndex: '99',
                                            width: { xs: '100%', md: 'calc(100% - 20%)' }
                                        }}
                                    >
                                        Streamlining the development process and saving you time and effort in the initial design phase.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Professional Kit for Designer
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Properly Organised Pages
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Dark/Light Design
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        *Figma file included only in Plus & Extended Licenses.
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />A theme that can be easily configured on a single page.
                                    </Typography>
                                    <Stack direction="row">
                                        <AnimateButton>
                                            <Button
                                                startIcon={<LayersTwoToneIcon />}
                                                sx={{ boxShadow: 'none', my: 4 }}
                                                variant="contained"
                                                component={Link}
                                                href="https://www.figma.com/file/2u2TmauA6lanVMYiywzS1o/berry-figma-v3.0?node-id=0%3A1"
                                                target="_blank"
                                            >
                                                Explore Figma
                                            </Button>
                                        </AnimateButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ img: { width: '100%' } }}>
                            <Stack sx={{ width: '70%', mx: 'auto' }}>
                                <CardMedia component="img" image={LayerRight} alt="Layer" />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CustomizeSection;
