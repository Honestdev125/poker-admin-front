// material-ui
import { Grid } from '@mui/material';

// project imports
import LoginForms from './LoginForms';
import InstantFeedback from './InstantFeedback';
import RadioGroupForms from './RadioGroupForms';
import CheckboxForms from './CheckboxForms';
import SelectForms from './SelectForms';
import AutocompleteForms from './AutocompleteForms';
import { gridSpacing } from 'store/constant';

// ==============================|| FORMS VALIDATION - FORMIK ||============================== //

const FormsValidation = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
            <LoginForms />
        </Grid>
        <Grid item xs={12} md={6}>
            <InstantFeedback />
        </Grid>
        <Grid item xs={12} md={6}>
            <RadioGroupForms />
        </Grid>
        <Grid item xs={12} md={6}>
            <CheckboxForms />
        </Grid>
        <Grid item xs={12} md={6}>
            <SelectForms />
        </Grid>
        <Grid item xs={12} md={6}>
            <AutocompleteForms />
        </Grid>
    </Grid>
);

export default FormsValidation;
