// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Button,
    CardContent,
    CardActions,
    Checkbox,
    Divider,
    Grid,
    TextField,
    FormHelperText,
    FormControlLabel,
    Typography
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import useConfig from 'hooks/useConfig';
import LAYOUT_CONST from 'constant';

// assets
import { IconClipboardList } from '@tabler/icons';

// ==============================|| Sticky ActionBar ||============================== //

function StickyActionBar() {
    const theme = useTheme();
    const { layout } = useConfig();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard content={false} sx={{ overflow: 'visible' }}>
                    <CardActions
                        sx={{
                            position: 'sticky',
                            top: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? 132 : 80,
                            bgcolor: theme.palette.background.default,
                            zIndex: 1,
                            borderRadius: '8px 8px 0 0',
                            borderBottom: `1px solid ${theme.palette.divider}`
                        }}
                    >
                        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                            <Grid item>
                                <Typography variant="h5" sx={{ m: 0 }}>
                                    Sticky Action Bar:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Submit
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained">Clear</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardActions>
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <Avatar
                                            variant="rounded"
                                            color="inherit"
                                            sx={{ bgcolor: theme.palette.secondary.main, ml: 'auto' }}
                                        >
                                            <IconClipboardList color="#fff" />
                                        </Avatar>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <Typography variant="h3" sx={{ mb: 0 }}>
                                            Personal Information
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 2 }}>
                                            Sticky Action Bar Lorem Ipsum is simply
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} lg={4} />
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                                            A. Personal Info:
                                        </Typography>
                                    </Grid>
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
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Password :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter Password" />
                                        <FormHelperText>Please enter your Password</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} lg={4} />
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                                            B. Educational Info:
                                        </Typography>
                                    </Grid>
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
                                            College Name :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter College name" />
                                        <FormHelperText>Please enter your College name</FormHelperText>
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Work Experience :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter Work Experience" />
                                        <FormHelperText>Please enter your Work Experience</FormHelperText>
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '1 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Language :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                                        <FormControlLabel control={<Checkbox />} label="French" />
                                        <FormControlLabel control={<Checkbox />} label="Dutch" />
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '1 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Hobby :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <FormControlLabel control={<Checkbox />} label="Reading" />
                                        <FormControlLabel control={<Checkbox />} label="Dancing" />
                                        <FormControlLabel control={<Checkbox />} label="Swimming" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} lg={4} />
                            <Grid item xs={12} lg={6}>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Submit
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained">Clear</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardActions>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default StickyActionBar;
