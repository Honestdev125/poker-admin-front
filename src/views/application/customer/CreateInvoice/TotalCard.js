import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Typography } from '@mui/material';

// third-party
import currency from 'currency.js';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| TOTAL-SUBCARD PAGE ||============================== //

function TotalCard({ productsData, allAmounts }) {
    const theme = useTheme();

    return (
        <>
            {productsData.length ? (
                <Grid item xs={12}>
                    <SubCard
                        sx={{
                            mx: 0,
                            mb: 0,
                            bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light
                        }}
                    >
                        <Grid container justifyContent="flex-end" spacing={2}>
                            <Grid item sm={6} md={4}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Typography align="right" variant="subtitle1">
                                                    Sub Total :
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                {allAmounts.subTotal && (
                                                    <Typography align="right" variant="body2">
                                                        {currency(allAmounts.subTotal).format()}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography align="right" variant="subtitle1">
                                                    Taxes (10%) :
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                {allAmounts.taxesAmount && (
                                                    <Typography align="right" variant="body2">
                                                        {currency(allAmounts.taxesAmount).format()}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography align="right" variant="subtitle1">
                                                    Discount (5%) :
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                {allAmounts.discountAmount && (
                                                    <Typography align="right" variant="body2">
                                                        {currency(allAmounts.discountAmount).format()}
                                                    </Typography>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider sx={{ bgcolor: 'dark.main' }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Typography align="right" color="primary" variant="subtitle1">
                                                    Total :
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                {allAmounts.totalAmount && (
                                                    <Typography align="right" color="primary" variant="subtitle1">
                                                        {currency(allAmounts.totalAmount).format()}
                                                    </Typography>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </SubCard>
                    <Grid item sx={{ mt: 3 }} xs={12}>
                        <Divider />
                    </Grid>
                </Grid>
            ) : null}
        </>
    );
}

TotalCard.propTypes = {
    productsData: PropTypes.array,
    allAmounts: PropTypes.object
};

export default TotalCard;
