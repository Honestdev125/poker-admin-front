import React from 'react';

// material-ui
import { Button, Box, CardMedia, Grid, Stack, Switch, Typography } from '@mui/material';

// project imports
import useConfig from 'hooks/useConfig';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import Transitions from 'ui-component/extended/Transitions';

// assets
import image from 'assets/images/profile/img-profile-bg.png';

// ==============================|| UTILITIES - ANIMATION ||============================== //

const Animation = () => {
    const { borderRadius } = useConfig();

    const [type, setType] = React.useState('grow');
    const [position, setPosition] = React.useState('top-left');
    const [direction, setDirection] = React.useState('up');
    const [animate, setAnimate] = React.useState(true);

    return (
        <Grid container>
            <Grid item xs={12}>
                <MainCard title="Basic Animation">
                    <Grid container justifyContent="center" spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item sm={12} md={4}>
                                    <SubCard title="Animation" sx={{ '& .MuiButton-root': { mr: 2, mb: 2 } }}>
                                        <Button variant={type === 'grow' ? 'contained' : 'outlined'} onClick={() => setType('grow')}>
                                            Grow
                                        </Button>
                                        <Button
                                            variant={type === 'collapse' ? 'contained' : 'outlined'}
                                            onClick={() => setType('collapse')}
                                        >
                                            Collapse
                                        </Button>
                                        <Button variant={type === 'fade' ? 'contained' : 'outlined'} onClick={() => setType('fade')}>
                                            Fade
                                        </Button>
                                        <Button variant={type === 'slide' ? 'contained' : 'outlined'} onClick={() => setType('slide')}>
                                            Slide
                                        </Button>
                                        <Button variant={type === 'zoom' ? 'contained' : 'outlined'} onClick={() => setType('zoom')}>
                                            Zoom
                                        </Button>
                                    </SubCard>
                                </Grid>
                                <Grid item sm={12} md={4}>
                                    <SubCard title="Position (Grow & Zoom Animation)" sx={{ '& .MuiButton-root': { mr: 2, mb: 2 } }}>
                                        <Button
                                            variant={position === 'top-left' ? 'contained' : 'outlined'}
                                            onClick={() => setPosition('top-left')}
                                            color="secondary"
                                            disabled={!(type === 'grow' || type === 'zoom')}
                                        >
                                            Top Left (Default)
                                        </Button>
                                        <Button
                                            variant={position === 'top' ? 'contained' : 'outlined'}
                                            onClick={() => setPosition('top')}
                                            color="secondary"
                                            disabled={!(type === 'grow' || type === 'zoom')}
                                        >
                                            Top
                                        </Button>
                                        <Button
                                            variant={position === 'top-right' ? 'contained' : 'outlined'}
                                            onClick={() => setPosition('top-right')}
                                            color="secondary"
                                            disabled={!(type === 'grow' || type === 'zoom')}
                                        >
                                            Top Right
                                        </Button>
                                        <Button
                                            variant={position === 'bottom-left' ? 'contained' : 'outlined'}
                                            onClick={() => setPosition('bottom-left')}
                                            color="secondary"
                                            disabled={!(type === 'grow' || type === 'zoom')}
                                        >
                                            Bottom Left
                                        </Button>
                                        <Button
                                            variant={position === 'bottom' ? 'contained' : 'outlined'}
                                            onClick={() => setPosition('bottom')}
                                            color="secondary"
                                            disabled={!(type === 'grow' || type === 'zoom')}
                                        >
                                            Bottom
                                        </Button>
                                        <Button
                                            variant={position === 'bottom-right' ? 'contained' : 'outlined'}
                                            onClick={() => setPosition('bottom-right')}
                                            color="secondary"
                                            disabled={!(type === 'grow' || type === 'zoom')}
                                        >
                                            Bottom Right
                                        </Button>
                                    </SubCard>
                                </Grid>
                                <Grid item sm={12} md={4}>
                                    <SubCard title="Direction (Slide Animation)" sx={{ '& .MuiButton-root': { mr: 2, mb: 2 } }}>
                                        <Button
                                            variant={direction === 'up' ? 'contained' : 'outlined'}
                                            onClick={() => setDirection('up')}
                                            color="secondary"
                                            disabled={!(type === 'slide')}
                                        >
                                            Up
                                        </Button>
                                        <Button
                                            variant={direction === 'down' ? 'contained' : 'outlined'}
                                            onClick={() => setDirection('down')}
                                            color="secondary"
                                            disabled={!(type === 'slide')}
                                        >
                                            Down
                                        </Button>
                                        <Button
                                            variant={direction === 'right' ? 'contained' : 'outlined'}
                                            onClick={() => setDirection('right')}
                                            color="secondary"
                                            disabled={!(type === 'slide')}
                                        >
                                            Right
                                        </Button>
                                        <Button
                                            variant={direction === 'left' ? 'contained' : 'outlined'}
                                            onClick={() => setDirection('left')}
                                            color="secondary"
                                            disabled={!(type === 'slide')}
                                        >
                                            Left
                                        </Button>
                                    </SubCard>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={9}>
                            <Stack spacing={3} alignItems="center">
                                <Box>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography variant={animate ? 'h5' : 'body1'}>IN</Typography>
                                        <Switch
                                            checked={animate}
                                            onChange={() => setAnimate(!animate)}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Typography variant={!animate ? 'h5' : 'body1'}>OUT</Typography>
                                    </Stack>
                                </Box>
                                <Transitions type={type} in={animate} position={position} direction={direction}>
                                    <MainCard content={false} border={false} boxShadow>
                                        <CardMedia
                                            component="img"
                                            image={image}
                                            title="Animation Content"
                                            sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden' }}
                                        />
                                    </MainCard>
                                </Transitions>
                            </Stack>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default Animation;
