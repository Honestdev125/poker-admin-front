import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, TextField } from '@mui/material';

// project imports
import { useDispatch, useSelector } from 'store';
import useConfig from 'hooks/useConfig';
import { addStoryComment } from 'store/slices/kanban';

// third-party
import { Chance } from 'chance';

// assets
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import AddToDriveTwoToneIcon from '@mui/icons-material/AddToDriveTwoTone';
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import { openSnackbar } from 'store/slices/snackbar';

const chance = new Chance();

// ==============================|| KANBAN BACKLOGS - ADD STORY COMMENT ||============================== //

const AddStoryComment = ({ storyId }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { borderRadius } = useConfig();
    const { comments, userStory } = useSelector((state) => state.kanban);

    const [comment, setComment] = useState('');
    const [isComment, setIsComment] = useState(false);

    const addNewStoryComment = () => {
        if (comment.length > 0) {
            const newComment = {
                id: `${chance.integer({ min: 1000, max: 9999 })}`,
                comment,
                profileId: 'profile-1'
            };

            dispatch(addStoryComment(storyId, newComment, comments, userStory));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Comment Add successfully',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
            setComment('');
        } else {
            setIsComment(true);
        }
    };

    const handleAddStoryComment = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            addNewStoryComment();
        }
    };

    const handleStoryComment = (event) => {
        const newComment = event.target.value;
        setComment(newComment);
        if (newComment.length <= 0) {
            setIsComment(true);
        } else {
            setIsComment(false);
        }
    };

    return (
        <Box
            sx={{
                p: 2.5,
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75,
                borderRadius: `${borderRadius}px`
            }}
        >
            <Grid container alignItems="center" spacing={0.5}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        placeholder="Add Comment"
                        value={comment}
                        onChange={handleStoryComment}
                        sx={{
                            mb: 2,
                            '& input': { bgcolor: 'transparent', p: 0, borderRadius: '0px' },
                            '& fieldset': { display: 'none' },
                            '& .MuiFormHelperText-root': {
                                ml: 0
                            },
                            '& .MuiOutlinedInput-root': {
                                bgcolor: 'transparent'
                            }
                        }}
                        onKeyUp={handleAddStoryComment}
                        helperText={isComment ? 'Comment is required.' : ''}
                        error={isComment}
                    />
                </Grid>
                <Grid item>
                    <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }} aria-label="add photo">
                        <AddPhotoAlternateTwoToneIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }} aria-label="add file attachment">
                        <AttachFileTwoToneIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }} aria-label="add file or any item to google drive">
                        <AddToDriveTwoToneIcon />
                    </Button>
                </Grid>
                <Grid item xs zeroMinWidth />
                <Grid item>
                    <Button variant="contained" color="primary" onClick={addNewStoryComment}>
                        Comment
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

AddStoryComment.propTypes = {
    storyId: PropTypes.string
};

export default AddStoryComment;
