import { React, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
    Grid,
    TextField,
    MenuItem,
    Button,
    Divider,
    FormHelperText,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel
} from '@mui/material';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useSelector } from 'store';
import axios from 'utils/axios';

const initialValues = {
    name: '',
    tournament_type_id: '',
    tournament_type_name: '',
    game_type_id: '',
    game_type_name: '',
    buy_in_amount: '',
    registration_start: new Date(),
    registration_end: new Date(),
    player_limit: '',
    starting_chip_count: '',
    prize_structure: '',
    tournament_start_time: new Date(),
    level_duration: '',
    starting_blinds: '',
    blind_increase_schedule: '',
    late_registration: '',
    breaks: '',
    blind_increase_interval: '',
    is_rebuyable: '',
    admin_user_id: ''
};
const validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required('* Tournament Name is required'),
    tournament_type_name: Yup.string().max(255).required('* Tournament Type is required'),
    game_type_name: Yup.string().max(255).required('* Game Type is required'),
    buy_in_amount: Yup.number().max(255, '* Buy-In-Amount must  be at less than or equel to 255').required('* Buy-In-Amount is required'),
    player_limit: Yup.number().max(255, '* Player Limit must  be at less than or equel to 255').required('* Player Limit is required'),
    starting_chip_count: Yup.number()
        .max(255, '* Starting Chip Count must  be at less than or equel to 255')
        .required('* Starting Chip Count is required'),
    prize_structure: Yup.number()
        .max(255, '* Prize Structure must  be at less than or equel to 255')
        .required('* Prize Structure is required'),
    level_duration: Yup.number()
        .max(255, '* Level Duration must  be at less than or equel to 255')
        .required('* Level Duration is required'),
    starting_blinds: Yup.number()
        .max(255, '* Starting Blinds must  be at less than or equel to 255')
        .required('* Starting Blinds is required'),
    blind_increase_schedule: Yup.number()
        .max(255, '* Blind Increase must  be at less than or equel to 255')
        .required('* Blind Increase Schedule is required'),
    breaks: Yup.number().max(255, 'Breaks must be at less than or equel to 255').required('* Breaks is required'),
    blind_increase_interval: Yup.number()
        .max(255, 'Blind-Increase-Interval must be at less than or equel to 255')
        .required('* Blind-Increase-Interval is required'),
    late_registration: Yup.number().required('* Late Registration is required')
});

const TournamentDetail = () => {
    const theme = useTheme();
    const { data, gameType, tournamentType, detailId } = useSelector((state) => state.tournamentList);
    const navigate = useNavigate();
    const getGameName = (id) => {
        const item = gameType.find((item) => item.id === id);
        return item.name;
    };

    const getTournamentName = (id) => {
        const item = tournamentType.find((item) => item.id === id);
        return item.name;
    };
    const clickCancel = () => {
        navigate(-1);
    };
    const { errors, handleChange, handleSubmit, setFieldValue, touched, values, resetForm } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const draftGameId = gameType.find((item) => item.name === values.game_type_name);
            values.game_type_id = draftGameId.id;
            const draftTournamentId = tournamentType.find((item) => item.name === values.tournament_type_name);
            values.tournament_type_id = draftTournamentId.id;
            axios
                .put('/tournament/update', values)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
            navigate(-1);
            delete values.game_type_name;
            delete values.tournament_type_name;
        }
    });

    useEffect(() => {
        if (data) {
            const draftData = data.find((item) => item.id === detailId);
            const gameName = getGameName(draftData.game_type_id);
            const tournamentName = getTournamentName(draftData.tournament_type_id);
            const resetData = {
                ...draftData,
                game_type_name: gameName,
                tournament_type_name: tournamentName,
                tournament_start_time: new Date(draftData.tournament_start_time),
                registration_start: new Date(draftData.registration_start),
                registration_end: new Date(draftData.registration_end)
            };
            resetForm({
                values: resetData
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, detailId]);

    return (
        <form onSubmit={handleSubmit}>
            <MainCard title="Create New Tournament">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={12}>
                            <Grid item xs={12} display="flex" justifyContent="space-around">
                                <Grid container alignItems="center" item spacing={3} xs={5} sx={{ '&>div': { height: '80px' } }}>
                                    <Grid item xs={12} mt={4}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            label="Tournament Name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        {touched.name && errors.name && (
                                            <FormHelperText error id="standard-weight-helper-text-name">
                                                {errors.name}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            select
                                            fullWidth
                                            label="Tournament Type"
                                            name="tournament_type_name"
                                            value={values.tournament_type_name}
                                            onChange={handleChange}
                                        >
                                            {tournamentType.map((option) => (
                                                <MenuItem key={option.name} value={option.name}>
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        {touched.tournament_type_name && errors.tournament_type_name && (
                                            <FormHelperText error id="standard-weight-helper-text-tournament_type_name">
                                                {errors.tournament_type_name}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            select
                                            fullWidth
                                            label="Game Type"
                                            name="game_type_name"
                                            value={values.game_type_name}
                                            onChange={handleChange}
                                        >
                                            {gameType.map((option) => (
                                                <MenuItem key={option.name} value={option.name}>
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        {touched.game_type_name && errors.game_type_name && (
                                            <FormHelperText error id="standard-weight-helper-text-game_type_name">
                                                {errors.game_type_name}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            label="Buy-In-Amount"
                                            name="buy_in_amount"
                                            value={values.buy_in_amount}
                                            type="number"
                                            onChange={handleChange}
                                        />
                                        {touched.buy_in_amount && errors.buy_in_amount && (
                                            <FormHelperText error id="standard-weight-helper-text-buy_in_amount">
                                                {errors.buy_in_amount}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} mt={0.5} display="flex" justifyContent="space-between">
                                        <Grid item xl={5.5}>
                                            <MobileDateTimePicker
                                                label="Registration Start Time"
                                                name="registration_start"
                                                value={values.registration_start}
                                                onChange={(newValue1) => {
                                                    setFieldValue('registration_start', newValue1);
                                                }}
                                                renderInput={(params) => <TextField fullWidth {...params} />}
                                            />
                                        </Grid>
                                        <Grid item xl={5.5} display="flex" justifyContent="space-between">
                                            <MobileDateTimePicker
                                                label="Registration End Time"
                                                name="registration_end"
                                                value={values.registration_end}
                                                onChange={(newValue1) => {
                                                    setFieldValue('registration_end', newValue1);
                                                }}
                                                renderInput={(params) => <TextField fullWidth {...params} />}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            name="player_limit"
                                            value={values.player_limit}
                                            label="Player Limit"
                                            onChange={handleChange}
                                            type="number"
                                        />
                                        {touched.player_limit && errors.player_limit && (
                                            <FormHelperText error id="standard-weight-helper-text-player_limit">
                                                {errors.player_limit}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={6} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            name="late_registration"
                                            value={values.late_registration}
                                            label="Late Registration"
                                            onChange={handleChange}
                                            type="number"
                                        />
                                        {touched.late_registration && errors.late_registration && (
                                            <FormHelperText error id="standard-weight-helper-text-late_registration">
                                                {errors.late_registration}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={6} mt={0.5}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">Rebuy</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-label="gender"
                                                value={values.is_rebuyable}
                                                onChange={handleChange}
                                                name="is_rebuyable"
                                            >
                                                <FormControlLabel
                                                    value="true"
                                                    control={
                                                        <Radio
                                                            sx={{
                                                                color: theme.palette.success.main,
                                                                '&.Mui-checked': { color: theme.palette.success.main }
                                                            }}
                                                        />
                                                    }
                                                    label="Yes"
                                                />
                                                <FormControlLabel
                                                    value="false"
                                                    control={
                                                        <Radio
                                                            sx={{
                                                                color: theme.palette.error.main,
                                                                '&.Mui-checked': { color: theme.palette.error.main }
                                                            }}
                                                        />
                                                    }
                                                    label="No"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                        {touched.is_rebuyable && errors.is_rebuyable && (
                                            <FormHelperText error id="standard-weight-helper-text-is_rebuyable">
                                                {errors.is_rebuyable}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                </Grid>
                                <Grid container alignItems="center" item spacing={3} xs={5} sx={{ '&>div': { height: '80px' } }}>
                                    <Grid item xs={12} mt={4}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            label="Starting Chip Count"
                                            name="starting_chip_count"
                                            value={values.starting_chip_count}
                                            type="number"
                                            onChange={handleChange}
                                        />
                                        {touched.starting_chip_count && errors.starting_chip_count && (
                                            <FormHelperText error id="standard-weight-helper-text-starting_chip_count">
                                                {errors.starting_chip_count}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            name="prize_structure"
                                            value={values.prize_structure}
                                            label="Prize Structure"
                                            type="number"
                                            onChange={handleChange}
                                        />
                                        {touched.prize_structure && errors.prize_structure && (
                                            <FormHelperText error id="standard-weight-helper-text-prize_structure">
                                                {errors.prize_structure}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <MobileDateTimePicker
                                            label="Tournament Start Time"
                                            name="tournament_start_time"
                                            value={values.tournament_start_time}
                                            onChange={(newValue1) => {
                                                setFieldValue('tournament_start_time', newValue1);
                                            }}
                                            renderInput={(params) => <TextField fullWidth {...params} />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            name="level_duration"
                                            value={values.level_duration}
                                            label="Level Duration"
                                            type="number"
                                            onChange={handleChange}
                                        />
                                        {touched.level_duration && errors.level_duration && (
                                            <FormHelperText error id="standard-weight-helper-text-level_duration">
                                                {errors.level_duration}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            name="starting_blinds"
                                            value={values.starting_blinds}
                                            label="Starting Blinds"
                                            type="number"
                                            onChange={handleChange}
                                        />
                                        {touched.starting_blinds && errors.starting_blinds && (
                                            <FormHelperText error id="standard-weight-helper-text-starting_blinds">
                                                {errors.starting_blinds}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} mt={0.5}>
                                        <TextField
                                            id="outlined-basic5"
                                            fullWidth
                                            name="blind_increase_schedule"
                                            value={values.blind_increase_schedule}
                                            label="Blind Increase Schedule"
                                            type="number"
                                            onChange={handleChange}
                                        />
                                        {touched.blind_increase_schedule && errors.blind_increase_schedule && (
                                            <FormHelperText error id="standard-weight-helper-text-blind_increase_schedule">
                                                {errors.blind_increase_schedule}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        mt={0.5}
                                        sx={{ padding: '30px 0px 15px 24px' }}
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Grid item xs={5}>
                                            <TextField
                                                id="outlined-basic5"
                                                fullWidth
                                                label="Scheduled  Breaks"
                                                name="breaks"
                                                value={values.breaks}
                                                onChange={handleChange}
                                                type="number"
                                            />
                                            {touched.breaks && errors.breaks && (
                                                <FormHelperText error id="standard-weight-helper-text-breaks">
                                                    {errors.breaks}
                                                </FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={5}>
                                            <TextField
                                                id="outlined-basic5"
                                                fullWidth
                                                label="Blind-Increase-Interval"
                                                name="blind_increase_interval"
                                                value={values.blind_increase_interval}
                                                onChange={handleChange}
                                            />
                                            {touched.blind_increase_interval && errors.blind_increase_interval && (
                                                <FormHelperText error id="standard-weight-helper-text-blind_increase_interval">
                                                    {errors.blind_increase_interval}
                                                </FormHelperText>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} mt={4}>
                                <Divider />
                                <Grid display="flex">
                                    <Grid item xs={12} mt={2} display="flex" justifyContent="flex-end">
                                        <Button type="submit" color="primary" variant="contained">
                                            Update
                                        </Button>
                                        <Button
                                            sx={{ marginLeft: '30px', marginRight: '100px' }}
                                            color="grey"
                                            variant="contained"
                                            onClick={clickCancel}
                                        >
                                            Back
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </LocalizationProvider>
            </MainCard>
        </form>
    );
};

export default TournamentDetail;
