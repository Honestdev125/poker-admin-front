// material-ui
import { Grid } from '@mui/material';

// project imports
import SimpleTabs from './SimpleTabs';
import ColorTabs from './ColorTabs';
import DisabledTabs from './DisabledTabs';
import IconTabs from './IconTabs';
import VerticalTabs from './VerticalTabs';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ================================|| UI TABS ||================================ //

const UITabs = () => (
    <MainCard title="Tabs" secondary={<SecondaryAction link="https://next.material-ui.com/components/tabs/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
                <SubCard title="Basic">
                    <SimpleTabs />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Color Tab">
                    <ColorTabs />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Icon Tabs">
                    <IconTabs />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Disabled Tabs">
                    <DisabledTabs />
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Vertical Tabs">
                    <VerticalTabs />
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UITabs;
