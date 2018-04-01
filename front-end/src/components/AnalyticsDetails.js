import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            stack: '1',
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(155,49,12,0.4)',
            borderColor: 'rgba(155,49,12,1)',
            borderWidth: 1,
            stack: '1',
            hoverBackgroundColor: 'rgba(155,49,12,0.4)',
            hoverBorderColor: 'rgba(155,59,12,1)',
            data: [55, 40, 81, 56, 65, 59, 80]
        },
        {
            label: 'My Third dataset',
            backgroundColor: 'rgba(45,149,102,0.4)',
            borderColor: 'rgba(45,149,102,1)',
            borderWidth: 1,
            stack: '1',
            hoverBackgroundColor: 'rgba(155,49,12,0.4)',
            hoverBorderColor: 'rgba(155,59,12,1)',
            data: [55, 40, 81, 56, 65, 59, 80]
        }
    ]
};

class AnalyticDetails extends Component {
    constructor(props) {
        super(props)
        this.analyticsId = this.props.match.params.id
    }

    render() {
        return (
            <div>
                <h1>Analytic Details Page</h1>
                <p>Gesamtzahl SLTs im Kreislauf: </p>
                <Line data={data} />
                <Bar
                    data={data2}
                />
            </div>
        );
    }
}

export default AnalyticDetails;