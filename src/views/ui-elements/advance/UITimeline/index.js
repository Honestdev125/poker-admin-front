// material-ui
import { Grid } from '@mui/material';

// project imports
import BasicTimeline from './BasicTimeline';
import RightAlignedTimeline from './RightAlignedTimeline';
import AlternateTimeline from './AlternateTimeline';
import ColorsTimeline from './ColorsTimeline';
import OutlinedTimeline from './OutlinedTimeline';
import OppositeContentTimeline from './OppositeContentTimeline';
import CustomizedTimeline from './CustomizedTimeline';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| UI TIMELINE ||============================== //

const UITimeline = () => (
    <MainCard title="Timeline" secondary={<SecondaryAction link="https://next.material-ui.com/components/timeline/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Basic">
                    <BasicTimeline />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Right Aligned">
                    <RightAlignedTimeline />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Alternating">
                    <AlternateTimeline />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Color">
                    <ColorsTimeline />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Outlined">
                    <OutlinedTimeline />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Opposite Content">
                    <OppositeContentTimeline />
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Customized">
                    <CustomizedTimeline />
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UITimeline;
