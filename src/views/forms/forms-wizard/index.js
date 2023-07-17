// material-ui
import { Grid } from '@mui/material';

// project imports
import BasicWizard from './BasicWizard';
import ValidationWizard from './ValidationWizard';
import { gridSpacing } from 'store/constant';

// ==============================|| FORMS WIZARD ||============================== //

const FormsWizard = () => (
    <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item xs={12} md={9} lg={7}>
            <BasicWizard />
        </Grid>
        <Grid item xs={12} md={9} lg={7}>
            <ValidationWizard />
        </Grid>
    </Grid>
);

export default FormsWizard;
