import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, InputAdornment, Menu, MenuItem, OutlinedInput, Pagination, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import { IconSearch } from '@tabler/icons';
import HoldemList from './HoldemList';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useNavigate } from 'react-router-dom';

// ==============================|| USER LIST STYLE 1 ||============================== //

const HoldemListHome = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate(`/texas-holdem/create`);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MainCard
                    title={
                        <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                            <Grid container item xs={12}>
                                <Grid item>
                                    <Typography variant="h3">Texas Holdem Management List</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} display="flex">
                                <Grid item xl={10} lg={9.5} md={7} xs={5}>
                                    <OutlinedInput
                                        id="input-search-list-style1"
                                        placeholder="Search"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconSearch stroke={1.5} size="16px" />
                                            </InputAdornment>
                                        }
                                        size="small"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xl={2}
                                    lg={2.5}
                                    md={5}
                                    xs={7}
                                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'ceneter' }}
                                >
                                    <Button variant="contained" onClick={handleClick1}>
                                        Create New Texas Holdem
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                    content={false}
                >
                    <HoldemList />
                    <Grid item xs={12} sx={{ p: 3 }}>
                        <Grid container justifyContent="space-between" spacing={gridSpacing}>
                            <Grid item>
                                <Pagination count={HoldemList.length / 10 + 1} color="primary" />
                            </Grid>
                            <Grid item>
                                <Button
                                    size="large"
                                    sx={{ color: theme.palette.grey[900] }}
                                    color="secondary"
                                    endIcon={<ExpandMoreRoundedIcon />}
                                    onClick={handleClick}
                                >
                                    10 Rows
                                </Button>
                                {anchorEl && (
                                    <Menu
                                        id="menu-user-list-style1"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        variant="selectedMenu"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right'
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}> 10 Rows</MenuItem>
                                        <MenuItem onClick={handleClose}> 20 Rows</MenuItem>
                                        <MenuItem onClick={handleClose}> 30 Rows </MenuItem>
                                    </Menu>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default HoldemListHome;
