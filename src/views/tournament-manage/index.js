import { React, useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, InputAdornment, Menu, MenuItem, OutlinedInput, Pagination, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import { IconSearch } from '@tabler/icons';
import TournamentList from './TournamentList';
import { useDispatch, useSelector } from 'store';
import { getDataCreateSuccess, getGameTypeSuccess } from 'store/slices/tournamentList';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useNavigate } from 'react-router-dom';

// ==============================|| USER LIST STYLE 1 ||============================== //

const TournamentListHome = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate(`/tournament/create`);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [count, setCount] = useState(10);
    const dispatch = useDispatch();
    const { totalCount } = useSelector((state) => state.tournamentList);
    const [pageNum, setPageNum] = useState(1);
    const [rowsPerPage, setRowPerPage] = useState(10);
    const [applyFilter, setApplyFiler] = useState(true);
    const [searchString, setSearchString] = useState();
    useEffect(() => {
        dispatch(getDataCreateSuccess(pageNum, rowsPerPage, searchString));
        dispatch(getGameTypeSuccess());
    }, [pageNum, rowsPerPage, applyFilter, dispatch, searchString]);
    const handleClose = (value) => {
        setAnchorEl(null);
        switch (value) {
            case 10:
                setCount(10);
                setRowPerPage(10);
                break;
            case 20:
                setCount(20);
                setRowPerPage(20);
                break;
            case 30:
                setCount(30);
                setRowPerPage(30);
                break;
            default:
                break;
        }
    };
    const handleChange = (event, value) => {
        setPageNum(value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setApplyFiler(!applyFilter);
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MainCard
                    title={
                        <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                            <Grid container item xs={12}>
                                <Grid item>
                                    <Typography variant="h3">Tournament Management List</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} display="flex">
                                <Grid item xl={10} lg={9.5} md={8} xs={8}>
                                    <OutlinedInput
                                        id="input-search-list-style1"
                                        placeholder="Search"
                                        onKeyDown={handleKeyDown}
                                        onChange={(event) => setSearchString(event.target.value)}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconSearch stroke={1.5} size="16px" />
                                            </InputAdornment>
                                        }
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xl={2} lg={2.5} md={4} xs={4}>
                                    <Button variant="contained" onClick={handleClick1}>
                                        Create Tournament
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                    content={false}
                >
                    <Grid>
                        <TournamentList />
                    </Grid>
                    <Grid item xs={12} sx={{ p: 3 }}>
                        <Grid container justifyContent="space-between" spacing={gridSpacing}>
                            <Grid item>
                                <Pagination count={Math.ceil(totalCount / count)} page={pageNum} onChange={handleChange} color="primary" />
                            </Grid>
                            <Grid item>
                                <Button
                                    size="large"
                                    sx={{ color: theme.palette.grey[900] }}
                                    color="secondary"
                                    endIcon={<ExpandMoreRoundedIcon />}
                                    onClick={handleClick}
                                >
                                    {count} Rows
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
                                        <MenuItem onClick={() => handleClose(10)}> 10 Rows</MenuItem>
                                        <MenuItem onClick={() => handleClose(20)}> 20 Rows</MenuItem>
                                        <MenuItem onClick={() => handleClose(30)}> 30 Rows </MenuItem>
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

export default TournamentListHome;
