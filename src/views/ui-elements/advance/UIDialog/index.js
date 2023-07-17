// material-ui
import { Grid } from '@mui/material';

// project imports
import SimpleDialogDemo from './SimpleDialog';
import AlertDialog from './AlertDialog';
import AlertDialogSlide from './AlertDialogSlide';
import FormDialog from './FormDialog';
import CustomizedDialogs from './CustomizedDialogs';
import FullScreenDialog from './FullScreenDialog';
import MaxWidthDialog from './MaxWidthDialog';
import ResponsiveDialog from './ResponsiveDialog';
import DraggableDialog from './DraggableDialog';
import ScrollDialog from './ScrollDialog';
import ConfirmationDialog from './ConfirmationDialog';

import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| UI DIALOG ||=============================== //

const UIDialog = () => (
    <MainCard title="Dialog" secondary={<SecondaryAction link="https://next.material-ui.com/components/dialogs/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Simple Dialog">
                    <Grid container justifyContent="center">
                        <SimpleDialogDemo />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Sweet Alert">
                    <Grid container justifyContent="center">
                        <AlertDialog />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Dialog Animation">
                    <Grid container justifyContent="center">
                        <AlertDialogSlide />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Form Dialogs">
                    <Grid container justifyContent="center">
                        <FormDialog />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Customized Dialogs">
                    <Grid container justifyContent="center">
                        <CustomizedDialogs />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Full Screen Dialogs">
                    <Grid container justifyContent="center">
                        <FullScreenDialog />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Dialogs Size">
                    <Grid container justifyContent="center">
                        <MaxWidthDialog />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Responsive Fullscreen Dialogs">
                    <Grid container justifyContent="center">
                        <ResponsiveDialog />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Draggable Dialogs">
                    <Grid container justifyContent="center">
                        <DraggableDialog />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Scrolling Dialogs">
                    <Grid container justifyContent="center">
                        <ScrollDialog />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SubCard title="Confirmation Dialogs">
                    <Grid container justifyContent="center">
                        <ConfirmationDialog />
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIDialog;
