import React from 'react';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';

const template = {
    labels: [],
    datasets: [
        {
            label: 'Producer',
            backgroundColor: 'rgba(61,163,232, 0.8)',
            data: []
        },
    ]
};

// function transformData(template, arrayOfData = {}, distributionOption) {
//     let templateCopy = JSON.parse(JSON.stringify(template));

//     arrayOfData.forEach(data => {
//         let value = {};

//         switch (distributionOption) {
//             case 'alle':
//                 value.consumer = data.value.consumer.empty + data.value.consumer.full
//                 value.producer = data.value.producer.empty + data.value.producer.full
//                 value.transit = data.value.transit.empty + data.value.transit.full
//                 break;
//             case 'leergut':
//                 value.consumer = data.value.consumer.empty
//                 value.producer = data.value.producer.empty
//                 value.transit = data.value.transit.empty
//                 break;
//             case 'vollgut':
//                 value.consumer = data.value.consumer.full
//                 value.producer = data.value.producer.full
//                 value.transit = data.value.transit.full
//                 break;
//             default:
//                 break;
//         }

//         templateCopy.labels.push(moment(data.timestamp).format("ddd, D MMM YY"))
//         templateCopy.datasets[0].data.push(value.consumer)
//         templateCopy.datasets[1].data.push(value.producer)
//         templateCopy.datasets[2].data.push(value.transit)
//     });
//     return templateCopy
// }

export default function AnalyticsZones(props) {
    let data = {};

    // if (props.data) {
    //     data = transformData(template, [].concat(props.data).reverse(), props.distributionOption)
    // }

    return (
        <Bar data={data} />
    )
}