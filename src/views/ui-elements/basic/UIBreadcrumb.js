// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// project imports
import Breadcrumb from 'ui-component/extended/Breadcrumbs';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import navigation from 'menu-items';
import { gridSpacing } from 'store/constant';

// assets
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// =============================|| UI BREADCRUMB ||============================= //

const UIBreadcrumb = () => {
    const theme = useTheme();

    return (
        <MainCard title="Breadcrumb" secondary={<SecondaryAction link="https://next.material-ui.com/components/breadcrumbs/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <SubCard title="Basic">
                        <Breadcrumb
                            navigation={navigation}
                            sx={{
                                mb: '0px !important',
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50'
                            }}
                        />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="Custom Separator">
                        <Breadcrumb
                            navigation={navigation}
                            separator={NavigateNextIcon}
                            sx={{
                                mb: '0px !important',
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50'
                            }}
                        />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="With Title">
                        <Breadcrumb
                            title
                            navigation={navigation}
                            separator={NavigateNextIcon}
                            sx={{
                                mb: '0px !important',
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50'
                            }}
                        />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="Title Bottom">
                        <Breadcrumb
                            title
                            titleBottom
                            navigation={navigation}
                            separator={NavigateNextIcon}
                            sx={{
                                mb: '0px !important',
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50'
                            }}
                        />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="With Icons">
                        <Breadcrumb
                            title
                            icons
                            navigation={navigation}
                            separator={NavigateNextIcon}
                            sx={{
                                mb: '0px !important',
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50'
                            }}
                        />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="Only Dashboard Icons">
                        <Breadcrumb
                            title
                            icon
                            navigation={navigation}
                            separator={NavigateNextIcon}
                            sx={{
                                mb: '0px !important',
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50'
                            }}
                        />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="Collapsed Breadcrumbs">
                        <Breadcrumb
                            title
                            maxItems={2}
                            navigation={navigation}
                            separator={NavigateNextIcon}
                            sx={{
                                mb: '0px !important',
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50'
                            }}
                        />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="No Card with Divider">
                        <Breadcrumb title navigation={navigation} separator={NavigateNextIcon} card={false} />
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="No Card & No Divider">
                        <Breadcrumb title navigation={navigation} separator={NavigateNextIcon} card={false} divider={false} />
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UIBreadcrumb;
