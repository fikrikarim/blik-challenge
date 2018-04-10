import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

const template = {
    labels: [],
    datasets: [
        {
            label: 'Length of stay',
            backgroundColor: 'rgba(61,163,232, 0.8)',
            borderColor: 'rgba(61,163,232, 1)',
            fill: false,
            data: []
        },
    ]
};

function transformData(template, arrayOfData = {}, zoneOption) {
    let templateCopy = JSON.parse(JSON.stringify(template));

    const zone = arrayOfData.find(function (data) {
        return data.name === zoneOption;
    });
    
    zone.lengthOfStay.reverse().forEach(data => {
        templateCopy.labels.push(moment(data.timestamp).format("ddd, D MMM YY"))
        templateCopy.datasets[0].data.push(data.value)
    });
    return templateCopy
}

export default function AnalyticsZones(props) {
    let data = {};

    if (props.data) {
        data = transformData(template, props.data, props.zoneOption)
    }

    return (
        <Line data={data} />
    )
}