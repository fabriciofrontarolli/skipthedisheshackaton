import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import './SellingsPerDay.css';

class SellingsPerDay extends Component { 
  render() {
    const { sellingsPerDay } = this.props;

    const chartLabels = sellingsPerDay.map(row => row.date);
    const chartValues = sellingsPerDay.map(row => parseFloat(row.amount));
    
    const chartData = {
      labels: chartLabels,
      datasets: [
        {
          label: 'Restaurant Sellings Per Day',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#e91431',
          borderColor: '#c04b4b',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#e91431',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#e91431',
          pointHoverBorderColor: '#e91431',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: chartValues
        }
      ]
    };

    return (
      <div className="SellingsPerDayChart">
        <Bar
          data={chartData}
          height={70}
        />
      </div>
    );
  }
}

export default SellingsPerDay;
