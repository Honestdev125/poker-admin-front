// material-ui
import { Grid } from '@mui/material';

// project imports
import BasicSlider from './BasicSlider';
import DisableSlider from './DisableSlider';
import VolumeSlider from './VolumeSlider';
import LabelSlider from './LabelSlider';
import PopupSlider from './PopupSlider';
import StepSlider from './StepSlider';
import VerticalSlider from './VerticalSlider';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| SLIDER PAGE ||============================== //

const Slider = () => (
    <MainCard title="Slider" secondary={<SecondaryAction link="https://next.material-ui.com/components/slider/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={4}>
                <SubCard title="Basic Slider">
                    <BasicSlider />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <SubCard title="Disabled">
                    <DisableSlider />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <SubCard title="Volume">
                    <VolumeSlider />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <SubCard title="With Label">
                    <LabelSlider />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <SubCard title="With Popup Value">
                    <PopupSlider />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <SubCard title="Steps With Popup Value">
                    <StepSlider />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <SubCard title="Vertical Slider">
                    <VerticalSlider />
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default Slider;
