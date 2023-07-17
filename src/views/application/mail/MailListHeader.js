import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Grid, IconButton, InputAdornment, Menu, MenuItem, Stack, TablePagination, TextField, useMediaQuery } from '@mui/material';

// assets
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HeightIcon from '@mui/icons-material/Height';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import SearchIcon from '@mui/icons-material/Search';

// ==============================|| MAIL LIST HEADER ||============================== //

const MailListHeader = ({
    search,
    handleSearch,
    length,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    handleDrawerOpen,
    handleDenseTable
}) => {
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClickSort = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseSort = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs>
                <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={1.5}>
                    <IconButton onClick={handleDrawerOpen} size="small" aria-label="click to sidebar menu collapse">
                        <MenuRoundedIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={handleDenseTable} size="small" aria-label="click to size change of mail">
                        <HeightIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={handleClickSort} size="small" aria-label="more options">
                        <MoreHorizTwoToneIcon fontSize="small" />
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseSort}>
                        <MenuItem onClick={handleCloseSort}>Name</MenuItem>
                        <MenuItem onClick={handleCloseSort}>Date</MenuItem>
                        <MenuItem onClick={handleCloseSort}>Ratting</MenuItem>
                        <MenuItem onClick={handleCloseSort}>Unread</MenuItem>
                    </Menu>
                    <TextField
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                        fullWidth={matchDownSM}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        onChange={handleSearch}
                        placeholder="Search Mail"
                        value={search}
                        size="small"
                    />
                </Stack>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1.5}>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        onChange={handleSearch}
                        placeholder="Search Mail"
                        value={search}
                        size="small"
                    />
                    {/* table pagination */}
                    <TablePagination
                        sx={{ '& .MuiToolbar-root': { pl: 1 } }}
                        rowsPerPageOptions={[]}
                        component="div"
                        count={length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
};

MailListHeader.propTypes = {
    search: PropTypes.string,
    length: PropTypes.number,
    rowsPerPage: PropTypes.number,
    page: PropTypes.number,
    handleSearch: PropTypes.func,
    handleChangeRowsPerPage: PropTypes.func,
    handleChangePage: PropTypes.func,
    handleDrawerOpen: PropTypes.func,
    handleDenseTable: PropTypes.func
};

export default MailListHeader;
