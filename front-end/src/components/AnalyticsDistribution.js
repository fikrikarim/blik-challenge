import React from 'react';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';


const template = {
    labels: [],
    datasets: [
        {
            label: 'Consumer',
            backgroundColor: 'rgba(255,101,133, 0.8)',
            stack: '1',
            data: []
        },
        {
            label: 'Producer',
            backgroundColor: 'rgba(61,163,232, 0.8)',
            stack: '1',
            data: []
        },
        {
            label: 'In Transit',
            backgroundColor: 'rgba(254,204,96, 0.8)',
            stack: '1',
            data: []
        }
    ]
};

function transformData(template, arrayOfData) {
    arrayOfData.forEach(data => {
        template.labels.push(moment(data.timestamp).format("ddd, D MMM YY"))
        template.datasets[0].data.push(data.value.consumer.empty + data.value.consumer.full)
        template.datasets[1].data.push(data.value.producer.empty + data.value.producer.full)
        template.datasets[2].data.push(data.value.transit.empty + data.value.transit.full)
    });
    return template
}

export default function AnalyticsDistribution(props) {
    let data;
    if (props.data) {
        data = transformData(template, props.data)
    } else {
        data = {}
    }

    return (
        <Bar data={data} />
    )
}