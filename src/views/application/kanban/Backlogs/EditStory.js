import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import {
    Box,
    Button,
    Divider,
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
    Stack,
    TextField
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// third party
import * as yup from 'yup';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useFormik } from 'formik';

// project imports
import ItemAttachments from '../Board/ItemAttachments';
import AddStoryComment from './AddStoryComment';
import StoryComment from './StoryComment';
import AlertStoryDelete from './AlertStoryDelete';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { editStory, deleteStory } from 'store/slices/kanban';

// assets
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const avatarImage = require.context('assets/images/users', true);
const validationSchema = yup.object({
    title: yup.string().required('User story title is required'),
    dueDate: yup.date()
});

// ==============================|| KANBAN BACKLOGS - EDIT STORY ||============================== //

const EditStory = ({ story, open, handleDrawerOpen }) => {
    const dispatch = useDispatch();
    const kanban = useSelector((state) => state.kanban);
    const { profiles, columns, comments, userStory, userStoryOrder } = kanban;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: story.id,
            title: story.title,
            assign: story.assign,
            columnId: story.columnId,
            priority: story.priority,
            dueDate: story.dueDate ? new Date(story.dueDate) : new Date(),
            acceptance: story.acceptance,
            description: story.description,
            commentIds: story.commentIds,
            image: false,
            itemIds: story.itemIds
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(editStory(values, userStory));
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

    const [openModal, setOpenModal] = useState(false);
    const handleModalClose = (status) => {
        setOpenModal(false);
        if (status) {
            handleDrawerOpen();
            dispatch(deleteStory(story.id, userStory, userStoryOrder));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Story Deleted successfully',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
        }
    };

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
            onClose={() => {
                handleDrawerOpen();
                formik.resetForm();
            }}
        >
            {open && (
                <>
                    <Box sx={{ p: 3 }}>
                        <Grid container alignItems="center" spacing={0.5} justifyContent="space-between">
                            <Grid item sx={{ width: 'calc(100% - 50px)' }}>
                                <Stack direction="row" spacing={0.5} alignItems="center">
                                    <Button
                                        variant="text"
                                        color="error"
                                        sx={{ p: 0.5, minWidth: 32, display: { xs: 'block', md: 'none' } }}
                                        onClick={handleDrawerOpen}
                                    >
                                        <HighlightOffIcon />
                                    </Button>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            display: 'inline-block',
                                            width: 'calc(100% - 34px)',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            verticalAlign: 'middle'
                                        }}
                                    >
                                        {story.title}
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="text"
                                    aria-label="Delete"
                                    color="error"
                                    sx={{ p: 0.5, minWidth: 32 }}
                                    onClick={() => setOpenModal(true)}
                                >
                                    <DeleteTwoToneIcon />
                                </Button>
                                {openModal && <AlertStoryDelete title={story.title} open={openModal} handleClose={handleModalClose} />}
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <PerfectScrollbar component="div">
                        <Box sx={{ p: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Grid container spacing={3}>
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
                                                                    value={
                                                                        profiles.find((profile) => profile.id === formik.values.assign) ||
                                                                        null
                                                                    }
                                                                    onChange={(event, value) => formik.setFieldValue('assign', value?.id)}
                                                                    options={profiles}
                                                                    fullWidth
                                                                    autoHighlight
                                                                    getOptionLabel={(option) => option.name}
                                                                    isOptionEqualToValue={(option) => option.id === formik.values.assign}
                                                                    renderOption={(props, option) => (
                                                                        <Box
                                                                            component="li"
                                                                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                                                            {...props}
                                                                        >
                                                                            <img
                                                                                loading="lazy"
                                                                                width="20"
                                                                                src={avatarImage(`./${option.avatar}`)}
                                                                                alt=""
                                                                            />
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
                                                                placeholder="Enter Your Message"
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
                                                                placeholder="Enter Your Message"
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
                                </Grid>
                                <Grid item xs={12}>
                                    {story?.commentIds &&
                                        [...story?.commentIds].reverse().map((commentId, index) => {
                                            const commentData = comments.filter((comment) => comment.id === commentId)[0];
                                            const profile = profiles.filter((item) => item.id === commentData.profileId)[0];
                                            return <StoryComment key={index} comment={commentData} profile={profile} />;
                                        })}
                                </Grid>
                                <Grid item xs={12}>
                                    <AddStoryComment storyId={story.id} />
                                </Grid>
                            </Grid>
                        </Box>
                    </PerfectScrollbar>
                </>
            )}
        </Drawer>
    );
};

EditStory.propTypes = {
    open: PropTypes.bool,
    handleDrawerOpen: PropTypes.func,
    story: PropTypes.object
};

export default EditStory;
