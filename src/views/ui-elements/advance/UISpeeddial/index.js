// material-ui
import { Grid } from '@mui/material';

// project imports
import SimpleSpeedDials from './SimpleSpeedDials';
import OpenIconSpeedDial from './OpenIconSpeedDial';
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// =============================|| UI SPEEDDIAL ||============================= //

const UISpeeddial = () => (
    <MainCard title="Speeddial" secondary={<SecondaryAction link="https://next.material-ui.com/components/speed-dial/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12} lg={6}>
                <SubCard title="Basic">
                    <SimpleSpeedDials />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Custom Close Icon">
                    <OpenIconSpeedDial />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Persistent Icon">
                    <SpeedDialTooltipOpen />
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UISpeeddial;
