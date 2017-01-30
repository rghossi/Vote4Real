import React from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import VoteBox from './VoteBox';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router';

export default class PollPage extends React.Component {
  previousPollBtn() {
    if (this.props.previousPoll){
      return <Link className="pager-item" to={`/poll/${this.props.previousPoll.id}`}>&larr; Previous</Link>;
    }
  }

  nextPollBtn() {
    if (this.props.nextPoll){
      return <Link className="pager-item" to={`/poll/${this.props.nextPoll.id}`}>Next &rarr;</Link>;
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='text-center'><small>{this.props.poll.name}</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <VoteBox poll={this.props.poll} />
          </Col>
          <Col xs={12} md={8}>
            <Doughnut data={this.props.chartData} />
          </Col>
        </Row>
        <Pager>
          {this.previousPollBtn()}
          {this.nextPollBtn()}
        </Pager>
      </div>
    );
  }
}