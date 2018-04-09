import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

const template = {
    labels: [],
    datasets: [
        {
            label: 'Deliveries',
            backgroundColor: 'rgba(255,101,133, 0.6)',
            borderColor: 'rgba(255,101,133, 0.8)',
            fill: false,
            data: []
        }
    ]
};

function transformData(template, arrayOfData) {
    arrayOfData.forEach(data => {
        template.labels.push(moment(data.timestamp).format("ddd, D MMM YY"))
        template.datasets[0].data.push(data.value)
    });
    return template
}

export default function AnalyticsDelivery(props) {
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