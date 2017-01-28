import React from 'react';
import DoughnutChart from 'react-chartjs';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

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