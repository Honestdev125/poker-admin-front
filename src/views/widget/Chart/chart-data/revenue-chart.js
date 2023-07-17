// ==============================|| WIDGET - REVENUE CHART ||============================== //

const chartData = {
    height: 228,
    type: 'donut',
    options: {
        chart: {
            id: 'revenue-chart'
        },
        dataLabels: {
            enabled: false
        },
        labels: ['Youtube', 'Facebook', 'Twitter'],
        legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'inherit',
            labels: {
                colors: 'inherit'
            },
            itemMargin: {
                horizontal: 10,
                vertical: 10
            }
        }
    },
    series: [1258, 975, 500]
};
export default chartData;
