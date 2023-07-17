// material-ui
import { Grid, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import FormControl from 'ui-component/extended/Form/FormControl';
import FormControlSelect from 'ui-component/extended/Form/FormControlSelect';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// assets
import Visibility from '@mui/icons-material/Visibility';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';

// select options
const currencies = [
    {
        value: '',
        label: 'None'
    },
    {
        value: '1',
        label: 'demo@company.com'
    },
    {
        value: '2',
        label: 'Lerrya@company.com'
    },
    {
        value: '3',
        label: 'judiya@company.com'
    },
    {
        value: '3',
        label: 'taju_diya@company.com'
    },
    {
        value: '4',
        label: 'judiyaLerrya@company.com'
    }
];

// ==============================|| TEXTFIELD PAGE ||============================== //

const TextFieldPage = () => (
    <MainCard title="Text Field" secondary={<SecondaryAction link="https://next.material-ui.com/components/text-fields/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
                <SubCard title="Variant">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic" label="Outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="filled-basic" label="Filled" variant="filled" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="standard-basic" label="Standard" variant="standard" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="General">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField fullWidth id="outlined-email-address" placeholder="Email Address" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-default-email-address"
                                placeholder="Email Address"
                                defaultValue="demo@company.com"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-disabled-email-address"
                                placeholder="Email Address"
                                defaultValue="demo@company.com"
                                disabled
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="With Caption">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl iconPrimary={EmailTwoToneIcon} placeholder="demo@company.com" captionLabel="Email Address" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl placeholder="demo@company.com" captionLabel="Email Address" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl iconSecondary={ModeEditTwoToneIcon} placeholder="demo@company.com" captionLabel="Email Address" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="With Validation">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl
                                iconPrimary={EmailTwoToneIcon}
                                placeholder="demo@company.com"
                                captionLabel="Email Address"
                                formState="error"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl placeholder="demo@company.com" captionLabel="Email Address" formState="error" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl placeholder="demo@company.com" captionLabel="Email Address" formState="valid" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="With Icon & Adornments">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl iconPrimary={EmailTwoToneIcon} placeholder="demo@company.com" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl iconPrimary={LockTwoToneIcon} placeholder="Password" iconSecondary={Visibility} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl textPrimary="Mr" placeholder="demo@company.com" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl textSecondary=".com" placeholder="John Doe" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Multiline">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                maxRows={4}
                                id="outlined-textarea"
                                label="Multiline Placeholder"
                                placeholder="Placeholder"
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={2}
                                defaultValue="Default Value"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="outlined-multiline-flexible" label="Multiline" multiline rows={3} defaultValue="" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Select">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControlSelect currencies={currencies} captionLabel="Email Address" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlSelect currencies={currencies} captionLabel="Email Address" selected="1" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Size">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic-size-default" label="Default" defaultValue="Default" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic-size-small" label="Small" size="small" defaultValue="Small" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Layout">
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-full-width"
                                label="Label"
                                placeholder="Placeholder"
                                helperText="Full width!"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="None"
                                id="outlined-margin-none"
                                defaultValue="Default Value"
                                helperText="Some important text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Dense"
                                fullWidth
                                id="outlined-margin-dense"
                                defaultValue="Default Value"
                                helperText="Some important text"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Normal"
                                fullWidth
                                id="outlined-margin-normal"
                                defaultValue="Default Value"
                                helperText="Some important text"
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default TextFieldPage;
