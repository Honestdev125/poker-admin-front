// material-ui
import { Grid } from '@mui/material';

// project imports
import ExclusiveToggleButtons from './ExclusiveToggleButtons';
import ToggleButtonsMultiple from './ToggleButtonsMultiple';
import StandaloneToggleButton from './StandaloneToggleButton';
import ToggleButtonSizes from './ToggleButtonSizes';
import VerticalToggleButtons from './VerticalToggleButtons';
import ToggleButtonNotEmpty from './ToggleButtonNotEmpty';
import CustomizedDividers from './CustomizedDividers';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ============================|| UI TOGGLE BUTTON ||============================ //

const UIToggleButton = () => (
    <MainCard title="Toggle Button" secondary={<SecondaryAction link="https://next.material-ui.com/components/toggle-button/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Exclusive Selection">
                    <ExclusiveToggleButtons />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Multiple Selection">
                    <ToggleButtonsMultiple />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Standalone">
                    <StandaloneToggleButton />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Sizes">
                    <ToggleButtonSizes />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Enforce Value Set">
                    <ToggleButtonNotEmpty />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Vertical">
                    <VerticalToggleButtons />
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Customized">
                    <CustomizedDividers />
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIToggleButton;
