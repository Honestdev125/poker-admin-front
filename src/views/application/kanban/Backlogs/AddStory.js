import PropTypes from 'prop-types';

// material-ui
import {
    Box,
    Button,
    Drawer,
    Grid,
    Typography,
    Autocomplete,
    FormControl,
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// third party
import * as yup from 'yup';
import { Chance } from 'chance';
import { useFormik } from 'formik';

// project imports
import ItemAttachments from '../Board/ItemAttachments';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { addStory } from 'store/slices/kanban';

const chance = new Chance();
const avatarImage = require.context('assets/images/users', true);
const validationSchema = yup.object({
    title: yup.string().required('User story title is required'),
    dueDate: yup.date()
});

// ==============================|| KANBAN BACKLOGS - ADD STORY ||============================== //

const AddStory = ({ open, handleDrawerOpen }) => {
    const dispatch = useDispatch();
    const kanban = useSelector((state) => state.kanban);
    const { profiles, columns, userStory, userStoryOrder } = kanban;

    const formik = useFormik({
        initialValues: {
            id: `${chance.integer({ min: 1000, max: 9999 })}`,
            title: '',
            assign: null,
            columnId: '',
            priority: 'low',
            dueDate: new Date(),
            acceptance: '',
            description: '',
            commentIds: '',
            image: false,
            itemIds: []
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(addStory(values, userStory, userStoryOrder));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Submit Success',
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
            handleDrawerOpen();
        }
    });

    return (
        <Drawer
            sx={{
                ml: open ? 3 : 0,
                flexShrink: 0,
                zIndex: 1200,
                overflowX: 'hidden',
                width: { xs: 320, md: 450 },
                '& .MuiDrawer-paper': {
                    height: '100vh',
                    width: { xs: 320, md: 450 },
                    position: 'fixed',
                    border: 'none',
                    borderRadius: '0px'
                }
            }}
            variant="temporary"
            anchor="right"
            open={open}
            ModalProps={{ keepMounted: true }}
            onClose={handleDrawerOpen}
        >
            {open && (
                <Box sx={{ p: 3 }}>
                    <form onSubmit={formik.handleSubmit}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h4">Add Story</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="title"
                                        name="title"
                                        label="Title"
                                        value={formik.values.title}
                                        onChange={formik.handleChange}
                                        error={formik.touched.title && Boolean(formik.errors.title)}
                                        helperText={formik.touched.title && formik.errors.title}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">Assign to:</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Grid container justifyContent="flex-start">
                                                <Autocomplete
                                                    id="assign"
                                                    value={profiles.find((profile) => profile.id === formik.values.assign) || null}
                                                    onChange={(event, value) => formik.setFieldValue('assign', value?.id)}
                                                    options={profiles}
                                                    fullWidth
                                                    autoHighlight
                                                    getOptionLabel={(option) => option.name}
                                                    isOptionEqualToValue={(option) => option.id === formik.values.assign}
                                                    renderOption={(props, option) => (
                                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                            <img loading="lazy" width="20" src={avatarImage(`./${option.avatar}`)} alt="" />
                                                            {option.name}
                                                        </Box>
                                                    )}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Choose a assignee"
                                                            inputProps={{
                                                                ...params.inputProps,
                                                                autoComplete: 'new-password' // disable autocomplete and autofill
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">Prioritize:</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-label="color"
                                                    value={formik.values.priority}
                                                    onChange={formik.handleChange}
                                                    name="priority"
                                                    id="priority"
                                                >
                                                    <FormControlLabel
                                                        value="low"
                                                        control={<Radio color="primary" sx={{ color: 'primary.main' }} />}
                                                        label="Low"
                                                    />
                                                    <FormControlLabel
                                                        value="medium"
                                                        control={<Radio color="warning" sx={{ color: 'warning.main' }} />}
                                                        label="Medium"
                                                    />
                                                    <FormControlLabel
                                                        value="high"
                                                        control={<Radio color="error" sx={{ color: 'error.main' }} />}
                                                        label="High"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">Due date:</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <DesktopDatePicker
                                                label="Due Date"
                                                value={formik.values.dueDate}
                                                inputFormat="dd/MM/yyyy"
                                                onChange={(date) => {
                                                    formik.setFieldValue('dueDate', date);
                                                }}
                                                renderInput={(props) => <TextField fullWidth {...props} />}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">Acceptance:</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <TextField
                                                fullWidth
                                                id="acceptance"
                                                name="acceptance"
                                                multiline
                                                rows={3}
                                                value={formik.values.acceptance}
                                                onChange={formik.handleChange}
                                                error={formik.touched.acceptance && Boolean(formik.errors.acceptance)}
                                                helperText={formik.touched.acceptance && formik.errors.acceptance}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">Description:</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <TextField
                                                fullWidth
                                                id="description"
                                                name="description"
                                                multiline
                                                rows={3}
                                                value={formik.values.description}
                                                onChange={formik.handleChange}
                                                error={formik.touched.description && Boolean(formik.errors.description)}
                                                helperText={formik.touched.description && formik.errors.description}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">State:</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <FormControl fullWidth>
                                                <Select
                                                    id="columnId"
                                                    name="columnId"
                                                    displayEmpty
                                                    value={formik.values.columnId}
                                                    onChange={formik.handleChange}
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    {columns.map((column, index) => (
                                                        <MenuItem key={index} value={column.id}>
                                                            {column.title}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">Attachments:</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <ItemAttachments attachments={[]} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <AnimateButton>
                                        <Button fullWidth variant="contained" type="submit">
                                            Save
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </LocalizationProvider>
                    </form>
                </Box>
            )}
        </Drawer>
    );
};

AddStory.propTypes = {
    open: PropTypes.bool,
    handleDrawerOpen: PropTypes.func
};

export default AddStory;
