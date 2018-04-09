import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';


const template = {
    labels: [],
    datasets: [
        {
            label: 'Maximum',
            backgroundColor: 'rgba(255,101,133, 0.8)',
            borderColor: 'rgba(255,101,133, 1)',
            fill: false,
            data: []
        },
        {
            label: 'Average',
            backgroundColor: 'rgba(61,163,232, 0.8)',
            borderColor: 'rgba(61,163,232, 1)',
            fill: false,
            data: []
        },
        {
            label: 'Minimum',
            backgroundColor: 'rgba(254,204,96, 0.8)',
            borderColor: 'rgba(254,204,96, 1)',
            fill: false,
            data: []
        }
    ]
};

function transformData(template, arrayOfData) {
    arrayOfData.forEach(data => {
        template.labels.push(moment(data.timestamp).format("ddd, D MMM YY"))
        template.datasets[0].data.push(data.max)
        template.datasets[1].data.push(data.avg)
        template.datasets[2].data.push(data.min)
    });
    return template
}

export default function AnalyticsThroughput(props) {
    let data;
    if (props.data) {
        data = transformData(template, props.data)
    } else {
        data = {}
    }

    return (
        <Line data={data} />
    )
}