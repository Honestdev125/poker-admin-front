import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Button, ClickAwayListener, Fab, Fade, Grid, IconButton, Typography, Zoom } from '@mui/material';
import MuiTooltip, { tooltipClasses } from '@mui/material/Tooltip';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// tooltip customization
const LightTooltip = styled(({ className, ...props }) => <MuiTooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11
    }
}));

const BootstrapTooltip = styled(({ className, ...props }) => <MuiTooltip {...props} arrow classes={{ popper: className }} />)(
    ({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white
        }
    })
);

const HtmlTooltip = styled(({ className, ...props }) => <MuiTooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9'
    }
}));

const CustomWidthTooltip = styled(({ className, ...props }) => <MuiTooltip {...props} classes={{ popper: className }} />)({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500
    }
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => <MuiTooltip {...props} classes={{ popper: className }} />)({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 'none'
    }
});

// ==============================|| PLUGIN - TOOLTIP ||============================== //

function Tooltip() {
    const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.`;

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6} lg={4}>
                <MainCard title="Simple Tooltips">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MuiTooltip title="Delete">
                                <IconButton aria-label="delete" size="large">
                                    <DeleteIcon />
                                </IconButton>
                            </MuiTooltip>
                        </Grid>
                        <Grid item>
                            <MuiTooltip title="Add" aria-label="add">
                                <Fab color="primary" sx={{ m: 2 }}>
                                    <AddIcon />
                                </Fab>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <MainCard title="Customized Tooltip">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <LightTooltip title="Add">
                                <Button>Light</Button>
                            </LightTooltip>
                        </Grid>
                        <Grid item>
                            <BootstrapTooltip title="Add">
                                <Button>Bootstrap</Button>
                            </BootstrapTooltip>
                        </Grid>
                        <Grid item>
                            <HtmlTooltip
                                title={
                                    <>
                                        <Typography color="inherit">Tooltip with HTML</Typography>
                                        <em>And here&apos;s</em>{' '}
                                        <Typography variant="subtitle1" component="span">
                                            some
                                        </Typography>{' '}
                                        <u>amazing content</u>. it&apos;s very engaging. Right?
                                    </>
                                }
                            >
                                <Button>HTML</Button>
                            </HtmlTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <MainCard title="Arrow Tooltips">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MuiTooltip title="Add" arrow>
                                <Button>Arrow</Button>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <MainCard title="Delay Tooltips">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MuiTooltip title="Add" enterDelay={500} leaveDelay={200}>
                                <Button>[500ms, 200ms]</Button>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <MainCard title="Disabled Tooltips">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MuiTooltip title="You Don't have permission to do this">
                                <span>
                                    <Button disabled>A Disabled Button</Button>
                                </span>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <MainCard title="Disable Interactive Tooltips">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MuiTooltip title="Add" disableInteractive>
                                <Button>Disable Interactive</Button>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>

            <Grid item xs={12}>
                <MainCard title="Triggers/Controlled Tooltips">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MuiTooltip disableFocusListener title="Add">
                                <Button>Hover or touch</Button>
                            </MuiTooltip>
                        </Grid>
                        <Grid item>
                            <MuiTooltip disableFocusListener disableTouchListener title="Add">
                                <Button>Hover</Button>
                            </MuiTooltip>
                        </Grid>
                        <Grid item>
                            <ClickAwayListener onClickAway={handleTooltipClose}>
                                <div>
                                    <MuiTooltip
                                        PopperProps={{
                                            disablePortal: true
                                        }}
                                        onClose={handleTooltipClose}
                                        open={open}
                                        disableFocusListener
                                        disableHoverListener
                                        disableTouchListener
                                        title="Add"
                                    >
                                        <Button onClick={handleTooltipOpen}>Click</Button>
                                    </MuiTooltip>
                                </div>
                            </ClickAwayListener>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard title="Transitions Tooltips">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MuiTooltip title="Add">
                                <Button>Grow</Button>
                            </MuiTooltip>
                        </Grid>
                        <Grid item>
                            <MuiTooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
                                <Button>Fade</Button>
                            </MuiTooltip>
                        </Grid>
                        <Grid item>
                            <MuiTooltip TransitionComponent={Zoom} title="Add">
                                <Button>Zoom</Button>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard title="Variable Width Tooltips">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <MuiTooltip title={longText}>
                                <Button sx={{ m: 1 }}>Default Width [300px]</Button>
                            </MuiTooltip>
                        </Grid>
                        <Grid item>
                            <CustomWidthTooltip title={longText}>
                                <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
                            </CustomWidthTooltip>
                        </Grid>
                        <Grid item>
                            <NoMaxWidthTooltip title={longText}>
                                <Button sx={{ m: 1 }}>No wrapping</Button>
                            </NoMaxWidthTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard title="Positioned Tooltips">
                    <Grid container justifyContent="center">
                        <Grid item>
                            <MuiTooltip title="Add" placement="top-start">
                                <Button>top-start</Button>
                            </MuiTooltip>
                        </Grid>
                        <Grid item>
                            <MuiTooltip title="Add" placement="top">
                                <Button>top</Button>
                            </MuiTooltip>
                        </Grid>
                        <Grid item>
                            <MuiTooltip title="Add" placement="top-end">
                                <Button>top-end</Button>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <MuiTooltip title="Add" placement="left-start">
                                <Button>left-start</Button>
                            </MuiTooltip>
                            <br />
                            <MuiTooltip title="Add" placement="left">
                                <Button>left</Button>
                            </MuiTooltip>
                            <br />
                            <MuiTooltip title="Add" placement="left-end">
                                <Button>left-end</Button>
                            </MuiTooltip>
                        </Grid>
                        <Grid item container xs={6} alignItems="flex-end" direction="column">
                            <Grid item>
                                <MuiTooltip title="Add" placement="right-start">
                                    <Button>right-start</Button>
                                </MuiTooltip>
                            </Grid>
                            <Grid item>
                                <MuiTooltip title="Add" placement="right">
                                    <Button>right</Button>
                                </MuiTooltip>
                            </Grid>
                            <Grid item>
                                <MuiTooltip title="Add" placement="right-end">
                                    <Button>right-end</Button>
                                </MuiTooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <MuiTooltip title="Add" placement="bottom-start">
                                <Button>bottom-start</Button>
                            </MuiTooltip>
                            <MuiTooltip title="Add" placement="bottom">
                                <Button>bottom</Button>
                            </MuiTooltip>
                            <MuiTooltip title="Add" placement="bottom-end">
                                <Button>bottom-end</Button>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default Tooltip;
