// material-ui
import { Grid, Pagination } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// =============================|| UI PAGINATION ||============================= //

const UIPagination = () => (
    <MainCard title="Pagination" secondary={<SecondaryAction link="https://next.material-ui.com/components/pagination/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <SubCard title="Basic Pagination">
                    <Grid container direction="column" spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Pagination count={10} />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} color="primary" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} color="secondary" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} disabled />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Outline Pagination">
                    <Grid container direction="column" spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Pagination count={10} variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} variant="outlined" color="primary" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} variant="outlined" color="secondary" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} variant="outlined" disabled />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Rounded Pagination">
                    <Grid container direction="column" spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} color="primary" shape="rounded" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} color="secondary" shape="rounded" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} disabled shape="rounded" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Pagination Size">
                    <Grid container direction="column" spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Pagination count={10} size="small" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} color="primary" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} color="secondary" size="large" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} variant="outlined" disabled size="small" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Pagination Ranges">
                    <Grid container direction="column" spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Pagination size="small" count={11} defaultPage={6} siblingCount={0} />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={11} defaultPage={6} color="primary" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} color="secondary" />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={11} defaultPage={6} boundaryCount={2} variant="outlined" color="primary" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Pagination Buttons">
                    <Grid container direction="column" spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Pagination count={10} color="primary" showFirstButton showLastButton />
                        </Grid>
                        <Grid item xs={12}>
                            <Pagination count={10} color="secondary" hidePrevButton hideNextButton />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIPagination;
