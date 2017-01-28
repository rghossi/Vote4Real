import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import contests from '../data/contests';
import NotFoundPage from './NotFoundPage';
import VotesGraph from './VotesGraph';

export default class ContestPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const contest = contests.filter((contest) => contest.id === id)[0];
    if (!contest) {
      return <NotFoundPage/>;
    }
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={6} mdPull={6}>
            <h2>{contest.name}</h2>
          </Col>
          <Clearfix visibleSmBlock></Clearfix>
          <Col md={6} mdPush={6}>
            <VotesGraph contest={contest} />
          </Col>
        </Row>
      </Grid>
    );
  }
}