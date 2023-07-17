import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import {
    Box,
    Button,
    Divider,
    Grid,
    LinearProgress,
    Table,
    TextField,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    TableHead,
    MenuItem,
    Switch
} from '@mui/material';

// project imports
import { useTheme } from '@mui/material/styles';
import SubCard from 'ui-component/cards/SubCard';
import Chip from 'ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';

// assets
import { IconEdit, IconTrash } from '@tabler/icons';
import AnimateButton from 'ui-component/extended/AnimateButton';

// progress
const currencies = [
    {
        value: 'Washington',
        label: 'Washington'
    },
    {
        value: 'India',
        label: 'India'
    },
    {
        value: 'Africa',
        label: 'Africa'
    },
    {
        value: 'New-York',
        label: 'New York'
    },
    {
        value: 'Malaysia',
        label: 'Malaysia'
    }
];
function LinearProgressWithLabel({ value, ...others }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    mr: 1
                }}
            >
                <LinearProgress value={value} {...others} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const tournamentList = [
    {
        name: '4822F891D1B283E3',
        email: 'happyguy@gmail.com',
        cuontry: 'Japan',
        chip: '33',
        status: '1'
    },
    {
        name: '8A95D81FS3D43B60',
        email: 'happyguy@gmail.com',
        cuontry: 'Japan',
        chip: '33',
        status: '2'
    },
    {
        name: 'A3804F46190FE2C6',
        email: 'happyguy@gmail.com',
        cuontry: 'Japan',
        chip: '33',
        status: '3'
    },
    {
        name: 'C1337416C8F8FC91',
        email: 'happyguy@gmail.com',
        cuontry: 'Japan',
        chip: '33',
        status: '2'
    },
    {
        name: 'CF7B5557B124B16D',
        email: 'happyguy@gmail.com',
        cuontry: 'India',
        chip: '33',
        status: '1'
    }
];

const PlayerDetail = () => {
    const rows = [
        createData('Master player account ID', '4822F891D1B283E3'),
        createData('Verification status', 'Confirmed'),
        createData('Master player account created', 'June 14,3023 4:41 AM'),
        createData('First login on this title', 'June 14,3023 4:41 AM'),
        createData('Last login', 'June 14,3023 4:44 AM'),
        createData('Value to date(USD)', '$0.00'),
        createData('Country/region', 'Japan')
    ];

    const theme = useTheme();

    const [currency, setCurrency] = useState('Washington');
    const handleChange1 = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Grid item lg={6.8} xl={5.5} md={12} sm={12} xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <SubCard
                            title="Player information"
                            secondary={
                                <Button aria-label="Edit Details">
                                    <IconEdit stroke={1.5} size="20px" />
                                </Button>
                            }
                        >
                            <Grid container spacing={2}>
                                <Divider sx={{ pt: 1 }} />
                                <Grid item xs={12}>
                                    <TableContainer>
                                        <Table
                                            sx={{
                                                '& td': {
                                                    padding: '16px 20px 17px'
                                                }
                                            }}
                                            size="small"
                                        >
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow hover key={row.name}>
                                                        <TableCell width="240px" variant="head">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell>{row.calories}</TableCell>
                                                        <Divider />
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl={5.5} lg={5.2} md={12} sm={12} xs={12}>
                <Grid item xs={12}>
                    <SubCard title="Title player account">
                        <form noValidate autoComplete="off">
                            <Grid
                                container
                                gap={gridSpacing}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <TextField id="outlined-basic5" fullWidth label="Title player account ID" defaultValue="4A4F61F4CD9ED0" />
                                <TextField id="outlined-basic5" fullWidth label="Disply Name" defaultValue="AAA" />
                                <TextField
                                    id="outlined-basic6"
                                    fullWidth
                                    label="Avatar image URL"
                                    defaultValue="http://website.com/avatar.jpg"
                                />
                                <TextField
                                    id="outlined-select-language"
                                    select
                                    fullWidth
                                    label="Language"
                                    value={currency}
                                    onChange={handleChange1}
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField id="outlined-basic5" fullWidth label="Contact email" defaultValue="........................" />
                                <Grid spacing={2} container justifyContent="space-between">
                                    <Grid item>
                                        <AnimateButton>
                                            <Button variant="contained">Save title player</Button>
                                        </AnimateButton>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ color: theme.palette.error.main }}>
                                            <IconTrash />
                                            Delete title player
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </SubCard>
                </Grid>
            </Grid>
            <Grid item xl={11.5} lg={12} md={12} sm={12} xs={12}>
                <SubCard
                    title="Tournament Participation"
                    secondary={
                        <Button aria-label="Edit Details">
                            <IconEdit stroke={1.5} size="20px" />
                        </Button>
                    }
                >
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tournament ID</TableCell>
                                    <TableCell>Resistration Status</TableCell>
                                    <TableCell>Buy-in-Status</TableCell>
                                    <TableCell>Participation Status</TableCell>
                                    <TableCell sx={{ paddingLeft: '0px' }}>Chip Count</TableCell>
                                    <TableCell>Admin Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tournamentList &&
                                    tournamentList.map((item) => (
                                        <TableRow hover key={item.id}>
                                            <TableCell>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" variant="subtitle1" component="div">
                                                            {item.name}{' '}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell>
                                                {item.status === '1' && <Chip label="Confirmed" size="small" chipcolor="success" />}
                                                {item.status === '2' && <Chip label="Canceled" size="small" chipcolor="orange" />}
                                                {item.status === '3' && <Chip label="Pending" size="small" chipcolor="blue" />}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {item.status === '1' && <Chip label="Checked" size="small" chipcolor="success" />}
                                                {item.status === '2' && <Chip label="Ongoing" size="small" chipcolor="orange" />}
                                                {item.status === '3' && <Chip label="Rejected" size="small" chipcolor="blue" />}
                                            </TableCell>
                                            <TableCell>
                                                {item.status === '1' && <Chip label="Active" size="small" chipcolor="success" />}
                                                {item.status === '2' && <Chip label="Eliminated" size="small" chipcolor="orange" />}
                                                {item.status === '3' && <Chip label="Pending" size="small" chipcolor="blue" />}
                                            </TableCell>
                                            <TableCell>{item.chip}</TableCell>
                                            <TableCell>
                                                {' '}
                                                <Grid item>
                                                    <Switch
                                                        defaultChecked
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
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </SubCard>
            </Grid>
        </Grid>
    );
};

export default PlayerDetail;
