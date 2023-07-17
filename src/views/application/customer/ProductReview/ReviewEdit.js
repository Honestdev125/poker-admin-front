import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, Rating, TextField, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';

// review state options
const reviewState = [
    {
        value: '1',
        label: 'Published'
    },
    {
        value: '2',
        label: 'Pending'
    },
    {
        value: '3',
        label: 'confirm'
    }
];

const ReviewEdit = ({ open, handleCloseDialog }) => {
    // handle review status change
    const [currency, setCurrency] = useState('1');
    const handleSelectChange = (event) => {
        setCurrency(event.target.value);
    };

    // handle star rating
    const [value, setValue] = useState(2);

    return (
        <Dialog
            open={open}
            onClose={handleCloseDialog}
            sx={{
                '&>div:nth-of-type(3)': {
                    '&>div': {
                        maxWidth: 400
                    }
                }
            }}
        >
            {open && (
                <>
                    <DialogTitle>Edit Review</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={gridSpacing} sx={{ my: 0 }}>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-basic-review-product"
                                    fullWidth
                                    label="Product "
                                    defaultValue="Apple Watch Series 4"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic-review-author" fullWidth label="Author " defaultValue="Joseph William" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-basic-review"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Text of review"
                                    defaultValue="If you're coming from a Series 3, the choice is more difficult. The Series 4 is undoubtedly the better device. And if you care about fall detection, the ECG app, or a larger screen then upgrading makes sense. But I think most people will remain satisfied with their Series 3s."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="left" variant="body2">
                                    Rating
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Status"
                                    value={currency}
                                    fullWidth
                                    onChange={handleSelectChange}
                                >
                                    {reviewState.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <AnimateButton>
                            <Button variant="contained">Create</Button>
                        </AnimateButton>
                        <Button variant="text" onClick={handleCloseDialog}>
                            Close
                        </Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
};

ReviewEdit.propTypes = {
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func
};

export default ReviewEdit;
