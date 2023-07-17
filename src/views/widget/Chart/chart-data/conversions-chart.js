// ==============================|| WIDGET - CONVERSION CHART ||============================== //

const chartCard = {
    type: 'bar',
    height: 260,
    options: {
        chart: {
            id: 'new-stack-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '80%'
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
                    formatter: () => 'Stock - '
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }
    ]
};

export default chartCard;
