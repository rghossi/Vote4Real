import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import contests from '../data/contests';
import NotFoundPage from './NotFoundPage';
import { Doughnut } from 'react-chartjs';

export default class ContestPage extends React.Component {
  render() {
    const id = parseInt(this.props.params.id);
    const contest = contests.filter((contest) => contest.id === id)[0];
    if (!contest) {
      return <NotFoundPage/>;
    }
    let data = [];
    contest.options.forEach((o) => {
      data.push({
        value: o.count,
        label: o.desc,
        color: "#F7464A"
      });
    });
    return (
      <div>
        <h2>{contest.name}</h2>
        <Doughnut data={data} />
      </div>
    );
  }
}