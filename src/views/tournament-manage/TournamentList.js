import { React, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'store';
import {
    Table,
    Button,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Dialog,
    IconButton,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@mui/material';
import Chip from 'ui-component/extended/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { format } from 'date-fns';
import { getDataCreateSuccess, getGameTypeSuccess, getTournamentTypeSuccess, getDetailIdSuccess } from 'store/slices/tournamentList';
import axios from 'utils/axios';

// ==============================|| USER LIST 1 ||============================== //

const TournamentList = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [delItemId, setDelItemId] = useState();
    const dispatch = useDispatch();
    const { data, gameType } = useSelector((state) => state.tournamentList);
    const handleEdit = (value) => {
        navigate('/tournamentDetail');
        dispatch(getDetailIdSuccess(value));
    };

    const handleDelete = (value) => {
        setOpen(true);
        setDelItemId(value);
    };
    const handleAgree = () => {
        setOpen(false);
        axios
            .delete('/tournament/delete', { data: { id: delItemId } })
            .then((response) => {
                setReload(!reload);
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleClose = () => {
        setOpen(false);
    };
    const gameName = (item) => {
        let temp = '';
        for (let i = 0; i < gameType.length; i += 1) {
            if (gameType[i].id === item.game_type_id) {
                temp = gameType[i].name;
                break;
            }
        }
        return temp;
    };
    useEffect(() => {
        dispatch(getGameTypeSuccess());
        dispatch(getTournamentTypeSuccess());
        dispatch(getDataCreateSuccess());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);

    return (
        <TableContainer>
            <Table>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{ p: 3 }}
                >
                    {open && (
                        <>
                            <DialogTitle id="alert-dialog-title">Tournament Management List</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography variant="body2" component="span">
                                        Are you sure you want to delete this tournament?
                                    </Typography>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions sx={{ pr: 2.5 }}>
                                <Button
                                    sx={{ color: theme.palette.error.dark, borderColor: theme.palette.error.dark }}
                                    onClick={handleClose}
                                    color="secondary"
                                >
                                    Disagree
                                </Button>
                                <Button variant="contained" size="small" onClick={handleAgree} autoFocus>
                                    Agree
                                </Button>
                            </DialogActions>
                        </>
                    )}
                </Dialog>
                <TableHead>
                    <TableRow>
                        <TableCell>No_</TableCell>
                        <TableCell>Tournament Name</TableCell>
                        <TableCell>Game Type</TableCell>
                        <TableCell>Chip Count</TableCell>
                        <TableCell>Paticipant Count</TableCell>
                        <TableCell>Tournament Start Time</TableCell>
                        <TableCell>Tournament Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((item, index) => (
                            <TableRow hover key={index}>
                                <TableCell sx={{ paddingLeft: '20px' }}>{index + 1}</TableCell>
                                <TableCell sx={{ paddingLeft: '20px', width: '300px' }}>{item.name}</TableCell>
                                <TableCell>{gameName(item)}</TableCell>
                                <TableCell sx={{ paddingLeft: '30px' }}>{item.starting_chip_count}</TableCell>
                                <TableCell sx={{ paddingLeft: '30px' }}>{item.registered_user ? item.registered_user.length : 0}</TableCell>
                                <TableCell>
                                    {item.tournament_start_time
                                        ? format(new Date(item.tournament_start_time), 'EEE, MMM/d/yyyy hh:mm a')
                                        : ''}
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '30px' }}>
                                    {new Date().getDate() <= new Date(item.registration_start).getDate() && (
                                        <Chip label="Open" size="small" chipcolor="info" />
                                    )}
                                    {new Date().getDate() > new Date(item.registration_start).getDate() &&
                                        new Date().getDate() <= new Date(item.registration_end).getDate() && (
                                            <Chip label="In-progress" size="small" chipcolor="success" />
                                        )}
                                    {new Date().getDate() > new Date(item.registration_end).getDate() && (
                                        <Chip label="Completed" size="small" chipcolor="warning" />
                                    )}
                                </TableCell>
                                <TableCell sx={{ pr: 3 }}>
                                    <IconButton
                                        color="primary"
                                        size="small"
                                        aria-label="edit"
                                        onClick={() => handleEdit(item.id)}
                                        sx={{ marginRight: '10px' }}
                                    >
                                        <EditTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        size="small"
                                        aria-label="delet"
                                        onClick={() => handleDelete(item.id)}
                                        sx={{ marginLeft: '10px' }}
                                    >
                                        <DeleteIcon sx={{ fontSize: '1.3rem' }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TournamentList;
