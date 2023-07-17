// ==============================|| WIDGET - SEO 5 CHART ||============================== //

const chartData = {
    type: 'line',
    height: 30,
    options: {
        chart: {
            id: 'session-timeout-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 2
        },
        yaxis: {
            min: -2,
            max: 5,
            labels: {
                show: false
            }
        },
        tooltip: {
            theme: 'light',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: () => 'Timeout '
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [3, 0, 1, 2, 1, 1, 2]
        }
    ]
};
export default chartData;
