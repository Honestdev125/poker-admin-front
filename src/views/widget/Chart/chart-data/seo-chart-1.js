// ==============================|| WIDGET - SEO 1 CHART ||============================== //

const chartData = {
    type: 'area',
    height: 40,
    options: {
        chart: {
            id: 'visit-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'solid',
            opacity: 0.3
        },
        markers: {
            size: 4,
            strokeWidth: 2,
            hover: {
                size: 6
            }
        },
        stroke: {
            curve: 'straight',
            width: 3
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
                    formatter: () => 'Visits :'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'series1',
            data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
        }
    ]
};

export default chartData;
