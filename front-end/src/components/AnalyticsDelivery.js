import React from 'react';
import { Line } from 'react-chartjs-2';

export default function AnalyticsDelivery(props) {
    let data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    return (
        <Line data={data} />
    )
}