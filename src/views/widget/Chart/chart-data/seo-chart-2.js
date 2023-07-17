// ==============================|| WIDGET - SEO 2 CHART ||============================== //

const chartData = {
    type: 'bar',
    height: 40,
    options: {
        chart: {
            id: 'bounce-bar-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        xaxis: {
            crosshairs: {
                width: 1
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: () => 'Bounce Rate :'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
        }
    ]
};

export default chartData;
