// ==============================|| WIDGET - MARKET SHARE CHART ||============================== //

const chartData = {
    height: 200,
    type: 'area',
    options: {
        chart: {
            id: 'market-sale-chart',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 80, 100]
            }
        },
        legend: {
            show: false
        },
        yaxis: {
            min: 1,
            max: 100,
            labels: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'Youtube',
            data: [10, 90, 65, 85, 40, 80, 30]
        },
        {
            name: 'Facebook',
            data: [50, 30, 25, 15, 60, 10, 25]
        },
        {
            name: 'Twitter',
            data: [5, 50, 40, 55, 20, 40, 20]
        }
    ]
};

export default chartData;
