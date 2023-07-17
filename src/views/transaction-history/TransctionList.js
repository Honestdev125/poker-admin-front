import React from 'react';

// material-ui
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses, Typography } from '@mui/material';
// project imports
import { useDispatch } from 'store';
import { getUsersListStyle1 } from 'store/slices/user';
import { styled, useTheme } from '@mui/material/styles';
import Chip from 'ui-component/extended/Chip';

// ==============================|| USER LIST 1 ||============================== //

const transactionList = [
    {
        date: '2020/01/16 13:21:27',
        result: 'Succeeded',
        transactionid: 'Transaction ID',
        orderid: 'Order ID',
        realid: 'C91A7F2C8F480027',
        itemd: 'Rewarded',
        amount: 'CO 400',
        from: 'A',
        to: 'B',
        client: 'client',
        status: '1',
        total: '',
        id: 1
    },
    {
        date: '2020/02/10 11:27:29',
        result: 'Succeeded',
        transactionid: 'Transaction ID',
        orderid: 'Order ID',
        realid: 'EC5D44/46DC93B4E',
        itemd: 'Voodoc Mage (IVoo0dooMage)',
        amount: 'CO 35000',
        from: 'A',
        to: 'B',
        client: 'client',
        status: '2',
        total: '',
        id: 2
    },
    {
        date: '2019/12/09 16:36:33',
        result: 'Succeeded',
        transactionid: 'Transaction ID',
        orderid: 'Order ID',
        realid: 'E566BF29BC506025',
        itemd: 'Vortex(Vortex)',
        amount: 'CO 2000',
        from: 'A',
        to: 'B',
        client: 'client',
        status: '3',
        total: '',
        id: 3
    },
    {
        date: '2019/12/09 16:36:27',
        result: 'Succeeded',
        transactionid: 'Transaction ID',
        orderid: 'Order ID',
        realid: '1E3DB6FF1A292091',
        itemd: 'Laser(Laser)',
        amount: 'CO 2000',
        from: 'A',
        to: 'B',
        client: 'client',
        status: '1',
        total: '',
        id: 4
    }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-of-type td, &:last-of-type th': {
        border: 0
    }
}));

const Transaction = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    React.useEffect(() => {
        dispatch(getUsersListStyle1());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TableContainer>
            <Table sx={{ minWidth: '900px', overflowX: 'auto' }}>
                <TableHead>
                    <TableRow sx={{ backgroundColor: theme.palette.action.hover }}>
                        <TableCell>Transaction ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell sx={{ width: '100px' }}>Item</TableCell>
                        <TableCell>From</TableCell>
                        <TableCell>To</TableCell>
                        <TableCell>Total in USD</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionList &&
                        transactionList.map((item) => (
                            <StyledTableRow hover key={item.id}>
                                <StyledTableCell>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" variant="subtitle1" component="div">
                                                {item.transactionid}{' '}
                                            </Typography>
                                            <Typography align="left" variant="subtitle1" component="div">
                                                {item.orderid}{' '}
                                            </Typography>
                                            <Typography align="left" variant="subtitle2" noWrap>
                                                {item.realid}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" variant="subtitle1" component="div">
                                                {item.date}{' '}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" variant="subtitle1" component="div">
                                                {item.amount}{' '}
                                            </Typography>
                                            <Typography align="left" variant="subtitle2" noWrap>
                                                {item.client}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                                <StyledTableCell style={{ color: '#2196F3' }}>{item.itemd}</StyledTableCell>
                                <StyledTableCell sx={{ pl: 3 }}>{item.from}</StyledTableCell>
                                <StyledTableCell sx={{ pl: 2.5 }}>{item.to}</StyledTableCell>
                                <StyledTableCell>{item.total}</StyledTableCell>
                                <StyledTableCell>
                                    {item.status === '1' && <Chip label="Succeeded" size="small" chipcolor="success" />}
                                    {item.status === '2' && <Chip label="Canceled" size="small" chipcolor="orange" />}
                                    {item.status === '3' && <Chip label="Pending" size="small" chipcolor="blue" />}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Transaction;
