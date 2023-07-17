import React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, MenuItem, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

// project imports

import { useDispatch } from 'store';
import { getUsersListStyle1 } from 'store/slices/user';

// assets
import { useNavigate } from 'react-router-dom';

// ==============================|| USER LIST 1 ||============================== //

const holdemList = [
    {
        name: 'High Roller',
        value: 1,
        type: 'Texas Holdem',
        buy: '1000',
        smallB: '10',
        bigB: '20',
        players: '6',
        rake: '5%'
    },
    {
        name: "Beginner's Table",
        value: 2,
        type: 'Texas Holdem',
        buy: '50',
        smallB: '1',
        bigB: '2',
        players: '9',
        rake: '15%'
    },
    {
        name: 'Friday Night',
        value: 3,
        type: 'Texas Holdem',
        buy: '200',
        smallB: '25',
        bigB: '50',
        players: '6',
        rake: '5%'
    },
    {
        name: 'Sunday Afternoon Poker',
        value: 4,
        type: 'Texas Holdem',
        buy: '100',
        smallB: '5',
        bigB: '10',
        players: '9',
        rake: '7%'
    },
    {
        name: 'High Stakes Showdown',
        value: 5,
        type: 'Texas Holdem',
        buy: '5000',
        smallB: '100',
        bigB: '200',
        players: '6',
        rake: '3%'
    },
    {
        name: 'Casual Poker Night',
        value: 6,
        type: 'Texas Holdem',
        buy: '20',
        smallB: '2',
        bigB: '4',
        players: '9',
        rake: '5%'
    },
    {
        name: 'Weekend Warriors',
        value: 7,
        type: 'Texas Holdem',
        buy: '50',
        smallB: '5',
        bigB: '10',
        players: '6',
        rake: '5%'
    }
];
const holdemvisibilities = [
    {
        value: 'Everyone',
        label: 'Everyone'
    },
    {
        value: 'Friend Only',
        label: 'Friend Only'
    },
    {
        value: 'Invite Only',
        label: 'Invite Only'
    }
];

const HoldemList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (tournament) => {
        switch (tournament.value) {
            case 1:
                navigate(`/holdemdetail/${1}`);
                break;
            case 2:
                navigate(`/holdemdetail/${2}`);
                break;
            case 3:
                navigate(`/holdemdetail/${3}`);
                break;
            case 4:
                navigate(`/holdemdetail/${4}`);
                break;
            default:
                break;
        }
    };
    const [holdemvisibility, setHoldemVisibility] = React.useState('Everyone');
    const handleHoldem = (event) => {
        setHoldemVisibility(event.target.value);
    };

    // React.useEffect(() => {
    //     setData(usersS1);
    // }, [usersS1]);

    React.useEffect(() => {
        dispatch(getUsersListStyle1());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Table Name</TableCell>
                        <TableCell align="center">Game Type</TableCell>
                        <TableCell align="center">Buy-in</TableCell>
                        <TableCell align="center">Small Blind</TableCell>
                        <TableCell align="center">Big Blind</TableCell>
                        <TableCell align="center">Auto Start</TableCell>
                        <TableCell align="center">Private Table</TableCell>
                        <TableCell align="center">Table Visibility</TableCell>
                        <TableCell align="center">Rake Percentage</TableCell>
                        <TableCell align="center">Number of Players</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {holdemList &&
                        holdemList.map((item, index) => (
                            <TableRow hover key={index}>
                                <TableCell sx={{ minWidth: '150px' }} align="center" onClick={() => handleClick(item, holdemList)}>
                                    {item.name}
                                </TableCell>
                                <TableCell sx={{ minWidth: '150px' }} align="center" onClick={() => handleClick(item, holdemList)}>
                                    {item.type}
                                </TableCell>
                                <TableCell sx={{ minWidth: '100px' }} align="center" onClick={() => handleClick(item, holdemList)}>
                                    {item.buy}
                                </TableCell>
                                <TableCell sx={{ minWidth: '120px' }} align="center" onClick={() => handleClick(item, holdemList)}>
                                    {item.smallB}
                                </TableCell>
                                <TableCell sx={{ minWidth: '100px' }} align="center" onClick={() => handleClick(item, holdemList)}>
                                    {item.bigB}
                                </TableCell>
                                <TableCell sx={{ minWidth: '100px' }} align="center">
                                    {' '}
                                    <Grid item>
                                        <Switch
                                            defaultChecked={item.value % 4 === 0 || item.value / 1 === 1 || item.value % 7 === 0}
                                            sx={{
                                                color: theme.palette.success.dark,
                                                '& .Mui-checked': { color: `${theme.palette.success.dark} !important` },
                                                '& .Mui-checked+.MuiSwitch-track': {
                                                    bgcolor: `${theme.palette.success.light} !important`
                                                }
                                            }}
                                        />
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{ minWidth: '150px' }} align="center">
                                    <Grid item>
                                        <Switch
                                            defaultChecked={item.value % 2 === 0 || item.value % 3 === 0}
                                            sx={{
                                                color: theme.palette.success.dark,
                                                '& .Mui-checked': { color: `${theme.palette.success.dark} !important` },
                                                '& .Mui-checked+.MuiSwitch-track': {
                                                    bgcolor: `${theme.palette.success.light} !important`
                                                }
                                            }}
                                        />
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{ minWidth: '150px', width: '150.001px' }} align="center">
                                    <TextField
                                        id="outlined-select-language"
                                        select
                                        fullWidth
                                        value={holdemvisibility}
                                        onChange={handleHoldem}
                                    >
                                        {holdemvisibilities.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </TableCell>
                                <TableCell
                                    sx={{ minWidth: '150px', width: '150px' }}
                                    align="center"
                                    onClick={() => handleClick(item, holdemList)}
                                >
                                    {item.rake}
                                </TableCell>
                                <TableCell sx={{ minWidth: '150px' }} align="center" onClick={() => handleClick(item, holdemList)}>
                                    {item.players}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HoldemList;
