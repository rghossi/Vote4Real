import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import contests from '../data/contests';
import NotFoundPage from './NotFoundPage';
import VoteBox from './VoteBox';
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
        <Row>
          <Col xs={12} md={12}>
            <h1 className='text-center'><small>{contest.name}</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <VoteBox contest={contest} />
          </Col>
          <Col xs={12} md={8}>
            <Doughnut data={data} />
          </Col>
        </Row>
      </div>
    );
  }
}