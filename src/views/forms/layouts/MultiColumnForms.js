// material-ui
import {
    Checkbox,
    Divider,
    Grid,
    InputAdornment,
    TextField,
    FormControlLabel,
    FormHelperText,
    RadioGroup,
    Radio,
    Typography
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

// assets
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';

// ==============================|| Columns Layouts ||============================== //
function ColumnsLayouts() {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="2 Columns Form Layout">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Name</InputLabel>
                            <TextField fullWidth placeholder="Enter full name" />
                            <FormHelperText>Please enter your full name</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Email</InputLabel>
                            <TextField fullWidth placeholder="Enter email" />
                            <FormHelperText>Please enter your Email</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Password</InputLabel>
                            <TextField
                                type="password"
                                fullWidth
                                placeholder="Enter Password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LockTwoToneIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormHelperText>Please enter Password</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Profile URL</InputLabel>
                            <TextField
                                fullWidth
                                placeholder="Please enter your Profile URL"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LinkTwoToneIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormHelperText>Please enter your Profile URL</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Typography variant="subtitle1" component="div" sx={{ mb: 1 }}>
                                language:
                            </Typography>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                            <FormControlLabel control={<Checkbox />} label="French" />
                            <FormControlLabel control={<Checkbox />} label="Dutch" />
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard title="2 Columns Horizontal Form Layout">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} lg={4}>
                                    <InputLabel>Name</InputLabel>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <TextField fullWidth placeholder="Enter full name" />
                                    <FormHelperText>Please enter your full name</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} lg={4}>
                                    <InputLabel>Email</InputLabel>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <TextField fullWidth placeholder="Enter email" />
                                    <FormHelperText>Please enter your Email</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} lg={4}>
                                    <InputLabel>Password</InputLabel>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <TextField
                                        type="password"
                                        fullWidth
                                        placeholder="Enter Password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LockTwoToneIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <FormHelperText>Please enter Password</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} lg={4}>
                                    <InputLabel>Profile URL</InputLabel>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <TextField
                                        fullWidth
                                        placeholder="Please enter your Profile URL"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LinkTwoToneIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <FormHelperText>Please enter your Profile URL</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} lg={4}>
                                    <InputLabel>language</InputLabel>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                                    <FormControlLabel control={<Checkbox />} label="French" />
                                    <FormControlLabel control={<Checkbox />} label="Dutch" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard title="3 Columns Form Layout">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={4}>
                            <InputLabel>Name</InputLabel>
                            <TextField fullWidth placeholder="Enter full name" />
                            <FormHelperText>Please enter your full name</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <InputLabel>Email</InputLabel>
                            <TextField fullWidth placeholder="Enter email" />
                            <FormHelperText>Please enter your Email</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <InputLabel>Password</InputLabel>
                            <TextField
                                type="password"
                                fullWidth
                                placeholder="Enter Password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockTwoToneIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormHelperText>Please enter Password</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <InputLabel>Contact</InputLabel>
                            <TextField fullWidth placeholder="Enter contact number" />
                            <FormHelperText>Please enter your contact</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <InputLabel>Profile URL</InputLabel>
                            <TextField
                                fullWidth
                                placeholder="Please enter your Profile URL"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LinkTwoToneIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormHelperText>Please enter your Profile URL</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <InputLabel>Pincode</InputLabel>
                            <TextField fullWidth placeholder="Enter your postcode" />
                            <FormHelperText>Please enter your postcode</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <InputLabel>Address</InputLabel>
                            <TextField fullWidth placeholder="Enter your address" />
                            <FormHelperText>Please enter your address</FormHelperText>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>User Type</InputLabel>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Administrator" />
                            <FormControlLabel control={<Checkbox />} label="Author" />
                            <FormHelperText>Please select User Type</FormHelperText>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard title="3 Columns Form Layout">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Name :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <TextField fullWidth placeholder="Enter full name" />
                                    <FormHelperText>Please enter your full name</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Email :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <TextField fullWidth placeholder="Enter email" />
                                    <FormHelperText>Please enter your Email</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Password :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <TextField
                                        type="password"
                                        fullWidth
                                        placeholder="Enter Password"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockTwoToneIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <FormHelperText>Please enter Password</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Contact :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <TextField fullWidth placeholder="Enter contact number" />
                                    <FormHelperText>Please enter your contact</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Profile URL :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <TextField
                                        fullWidth
                                        placeholder="Please enter your Profile URL"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LinkTwoToneIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <FormHelperText>Please enter your Profile URL</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Pincode :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <TextField fullWidth placeholder="Enter your postcode" />
                                    <FormHelperText>Please enter your postcode</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        Address :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <TextField fullWidth placeholder="Enter your address" />
                                    <FormHelperText>Please enter your address</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                        User Type :
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <RadioGroup aria-label="gender" name="controlled-radio-buttons-group">
                                        <FormControlLabel value="female" control={<Radio />} label="Administrator" />
                                        <FormControlLabel value="male" control={<Radio />} label="Author" />
                                    </RadioGroup>
                                    <FormHelperText>Please select User Type</FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default ColumnsLayouts;
