// material-ui
import { Checkbox, Divider, Grid, TextField, FormGroup, FormControlLabel, FormHelperText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

// ==============================|| Layouts ||============================== //
function Layouts() {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={6}>
                <MainCard title="Simple Form Layout">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <InputLabel>Name</InputLabel>
                            <TextField fullWidth placeholder="Enter full name" />
                            <FormHelperText>Please enter your full name</FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Email</InputLabel>
                            <TextField fullWidth placeholder="Enter email" />
                            <FormHelperText>Please enter your Email</FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Password</InputLabel>
                            <TextField type="password" fullWidth placeholder="Enter Password" />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Language</InputLabel>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                                <FormControlLabel control={<Checkbox />} label="French" />
                                <FormControlLabel control={<Checkbox />} label="Dutch" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MainCard title="Horizontal Form Layout">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                                A. Personal Info:
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal>Name</InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <TextField fullWidth placeholder="Enter full name" />
                                    <FormHelperText>Please enter your full name</FormHelperText>
                                </Grid>
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal>Email</InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <TextField fullWidth placeholder="Enter email" />
                                    <FormHelperText>Please enter your Email</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                                B. Educational Info:
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal>Degree Name</InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <TextField fullWidth placeholder="Enter Degree name" />
                                    <FormHelperText>Please enter your Degree name</FormHelperText>
                                </Grid>
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal>Passing Year</InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <TextField fullWidth placeholder="Enter Passing Year" />
                                    <FormHelperText>Please enter Passing Year</FormHelperText>
                                </Grid>
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal>Language</InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                                    <FormControlLabel control={<Checkbox />} label="French" />
                                    <FormControlLabel control={<Checkbox />} label="Dutch" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MainCard title="Control Divider">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <InputLabel>Name</InputLabel>
                            <TextField fullWidth placeholder="Enter full name" />
                            <FormHelperText>Please enter your full name</FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Email</InputLabel>
                            <TextField fullWidth placeholder="Enter email" />
                            <FormHelperText>Please enter your Email</FormHelperText>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Password</InputLabel>
                            <TextField type="password" fullWidth placeholder="Enter Password" />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Language</InputLabel>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                                <FormControlLabel control={<Checkbox />} label="French" />
                                <FormControlLabel control={<Checkbox />} label="Dutch" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MainCard title="Input Label Alignment">
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                                A. Personal Info:
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Name :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <TextField fullWidth placeholder="Enter full name" />
                                    <FormHelperText>Please enter your full name</FormHelperText>
                                </Grid>
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Email :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <TextField fullWidth placeholder="Enter email" />
                                    <FormHelperText>Please enter your Email</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                                B. Educational Info:
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Degree Name :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <TextField fullWidth placeholder="Enter Degree name" />
                                    <FormHelperText>Please enter your Degree name</FormHelperText>
                                </Grid>
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Passing Year :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <TextField fullWidth placeholder="Enter Passing Year" />
                                    <FormHelperText>Please enter Passing Year</FormHelperText>
                                </Grid>
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Language :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={6}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                                    <FormControlLabel control={<Checkbox />} label="French" />
                                    <FormControlLabel control={<Checkbox />} label="Dutch" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default Layouts;
