import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import contests from '../data/contests';
import NotFoundPage from './NotFoundPage';
import { Doughnut } from 'react-chartjs-2';

export default class ContestPage extends React.Component {
  render() {
    const id = parseInt(this.props.params.id);
    const contest = contests.filter((contest) => contest.id === id)[0];
    if (!contest) {
      return <NotFoundPage/>;
    }
    const colors = ['#56E2CF','#56AEE2','#8A56E2', '#CF56E2', '#E256AE', '#E25668', '#E28956', '#E2CF56', '#AEE256'];
    const data = {
      labels: contest.options.map((o) => {return o.desc}),
      datasets: [{
        data: contest.options.map((o) => {return o.count}),
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
    };
    return (
      <div>
        <h2>{contest.name}</h2>
        <Doughnut data={data} />
      </div>
    );
  }
}