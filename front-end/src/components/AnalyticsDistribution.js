import React from 'react';
import { Bar } from 'react-chartjs-2';


const template = {
    labels: [],
    datasets: [
        {
            label: 'Consumer',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            stack: '1',
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
        },
        {
            label: 'Producer',
            backgroundColor: 'rgba(155,49,12,0.4)',
            borderColor: 'rgba(155,49,12,1)',
            borderWidth: 1,
            stack: '1',
            hoverBackgroundColor: 'rgba(155,49,12,0.4)',
            hoverBorderColor: 'rgba(155,59,12,1)',
            data: []
        },
        {
            label: 'In Transit',
            backgroundColor: 'rgba(45,149,102,0.4)',
            borderColor: 'rgba(45,149,102,1)',
            borderWidth: 1,
            stack: '1',
            hoverBackgroundColor: 'rgba(155,49,12,0.4)',
            hoverBorderColor: 'rgba(155,59,12,1)',
            data: []
        }
    ]
};

function transformData(template, arrayOfData) {
    arrayOfData.forEach(data => {
        template.labels.push(data.timestamp)
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
        data = []
    }
    
    return (
        <Bar data={data} />
    )
}