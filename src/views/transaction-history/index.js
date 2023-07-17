import React from 'react';

// material-ui
import { Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';

// project imports
import UserList from './TransctionList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import { IconSearch } from '@tabler/icons';

// ==============================|| USER LIST STYLE 1 ||============================== //

const TransactionIndex = () => (
    <MainCard
        title={
            <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                <Grid item>
                    <Typography variant="h3">Transaction History</Typography>
                </Grid>
                <Grid item>
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
            </Grid>
        }
        content={false}
    >
        <UserList />
    </MainCard>
);

export default TransactionIndex;
