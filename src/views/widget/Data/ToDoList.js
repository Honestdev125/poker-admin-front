import React from 'react';

// material-ui
import { CardActions, CardContent, Checkbox, Divider, Fab, FormControlLabel, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import AddRoundedIcon from '@mui/icons-material/AddRounded';

// ===========================|| DATA WIDGET - TODO LIST ||=========================== //

const ToDoList = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: false,
        checkedE: false,
        checkedF: false
    });

    const handleChangeState = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <MainCard title="To Do List" content={false}>
            <CardContent>
                <Grid container spacing={0} sx={{ '& .Mui-checked + span': { textDecoration: 'line-through' } }}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChangeState} name="checkedA" color="primary" />}
                            label="Check your Email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedB} onChange={handleChangeState} name="checkedB" color="primary" />}
                            label="Make YouTube Video"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedC} onChange={handleChangeState} name="checkedC" color="primary" />}
                            label="Create Banner"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedD} onChange={handleChangeState} name="checkedD" color="primary" />}
                            label="Upload Project"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedE} onChange={handleChangeState} name="checkedE" color="primary" />}
                            label="Update Task"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedF} onChange={handleChangeState} name="checkedF" color="primary" />}
                            label="Task Issue"
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardActions>
                <Grid container direction="row-reverse">
                    <Grid item>
                        <Fab size="small" color="primary" aria-label="new todo add">
                            <AddRoundedIcon fontSize="small" />
                        </Fab>
                    </Grid>
                </Grid>
            </CardActions>
        </MainCard>
    );
};

export default ToDoList;
