import PropTypes from 'prop-types';

// material-ui
import { Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import useConfig from 'hooks/useConfig';
import MainCard from 'ui-component/cards/MainCard';

// =========================|| SATISFACTION CHART CARD ||========================= //

const SatisfactionChartCard = ({ chartData }) => {
    const { rtlLayout } = useConfig();

    return (
        <MainCard>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Typography variant="subtitle1">Customer Satisfaction</Typography>
                </Grid>
                <Grid item sx={{ '& .apexcharts-legend-text': { marginLeft: rtlLayout ? '8px' : 'initial' } }}>
                    <Chart {...chartData} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

SatisfactionChartCard.propTypes = {
    chartData: PropTypes.object
};

export default SatisfactionChartCard;
