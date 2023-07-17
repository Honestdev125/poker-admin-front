import React from 'react';

// material-ui
import { Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';

// project imports
import FriendRequestCard from 'ui-component/cards/FriendRequestCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getFriendRequests, filterFriendRequests } from 'store/slices/user';

// assets
import { IconSearch } from '@tabler/icons';

// ==============================|| SOCIAL PROFILE - FRIEND REQUEST ||============================== //

const FriendRequest = () => {
    const dispatch = useDispatch();
    const [friendRequest, setFriendRequest] = React.useState([]);
    const userState = useSelector((state) => state.user);

    const [search, setSearch] = React.useState('');

    const handleSearch = async (event) => {
        const newString = event?.target.value;
        setSearch(newString);

        if (newString) {
            dispatch(filterFriendRequests(newString));
        } else {
            dispatch(getFriendRequests());
        }
    };

    React.useEffect(() => {
        setFriendRequest(userState.friendRequests);
    }, [userState]);

    React.useEffect(() => {
        dispatch(getFriendRequests());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let friendRequestResult = <></>;
    if (friendRequest) {
        friendRequestResult = friendRequest.map((friend, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <FriendRequestCard {...friend} />
            </Grid>
        ));
    }

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Friend Request</Typography>
                    </Grid>
                    <Grid item>
                        <OutlinedInput
                            size="small"
                            id="input-search-user-profile"
                            placeholder="Search Friends"
                            value={search}
                            onChange={handleSearch}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconSearch stroke={1.5} size="16px" />
                                </InputAdornment>
                            }
                        />
                    </Grid>
                </Grid>
            }
        >
            <Grid container direction="row" spacing={gridSpacing}>
                {friendRequestResult}
            </Grid>
        </MainCard>
    );
};

export default FriendRequest;
