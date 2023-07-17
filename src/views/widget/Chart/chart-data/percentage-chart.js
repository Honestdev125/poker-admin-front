// ==============================|| WIDGET - PERCENTAGE CHART ||============================== //

const chartData = {
    height: 224,
    type: 'bar',
    options: {
        chart: {
            id: 'percentage-chart',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '55%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0
        },
        xaxis: {
            categories: ['Desktop', 'Mobile', 'Tablet', 'Laptop']
        }
    },
    series: [
        {
            name: 'Requests',
            data: [66.6, 29.7, 32.8, 50]
        }
    ]
};

export default chartData;
