import React from 'react';
import DoughnutChart from 'react-chartjs';

export default class VotesGraph extends React.Component {
  render() {
    const contest = this.props.contest;
    const chartData = {
        labels: contest.options.map((option) => {option.desc}),
        datasets: [{
            label: '# of Votes',
            data: contest.options.map((option) => {option.count}),
            borderWidth: 1
        }]
      };
    return (
      <DoughnutChart data={chartData} />
    );
  }
}