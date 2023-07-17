import React from 'react';

// material-ui
import { Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';

// project imports
import FollowerCard from 'ui-component/cards/FollowerCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getFollowers, filterFollowers } from 'store/slices/user';

// assets
import { IconSearch } from '@tabler/icons';

// ==============================|| SOCIAL PROFILE - FOLLOWERS ||============================== //

const Followers = () => {
    const dispatch = useDispatch();
    const [followers, setFollowers] = React.useState([]);
    const userState = useSelector((state) => state.user);

    React.useEffect(() => {
        setFollowers(userState.followers);
    }, [userState]);

    React.useEffect(() => {
        dispatch(getFollowers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [search, setSearch] = React.useState('');
    const handleSearch = async (event) => {
        const newString = event?.target.value;
        setSearch(newString);

        if (newString) {
            dispatch(filterFollowers(newString));
        } else {
            dispatch(getFollowers());
        }
    };

    let followersResult = <></>;
    if (followers) {
        followersResult = followers.map((follower, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <FollowerCard {...follower} />
            </Grid>
        ));
    }

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Followers</Typography>
                    </Grid>
                    <Grid item>
                        <OutlinedInput
                            size="small"
                            id="input-search-user-profile"
                            placeholder="Search Followers"
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
                {followersResult}
            </Grid>
        </MainCard>
    );
};

export default Followers;
