import React from 'react';
import { Button, Row, Col, Pager } from 'react-bootstrap';
import VoteBox from './VoteBox';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router';

export default class PollPage extends React.Component {
  previousPollBtn() {
    if (this.props.previousPoll){
      return <Link className="pager-item" to={`/poll/${this.props.filter}/${this.props.previousPoll._id}`}>&larr; Previous</Link>;
    }
  }

  nextPollBtn() {
    if (this.props.nextPoll){
      return <Link className="pager-item" to={`/poll/${this.props.filter}/${this.props.nextPoll._id}`}>Next &rarr;</Link>;
    }
  }

  render() {
    let deleteButton;
    if (this.props.userId && this.props.userId === this.props.poll.author){
      deleteButton = <Button onClick={this.props.deletePoll} bsStyle='danger'>Delete poll</Button>;
    } else {
      deleteButton = null;
    }
    return (
      <div>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='text-center'><small>{this.props.poll.title}</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <VoteBox selectedItem={this.props.selectedItem} handleSelect={this.props.handleSelect} handleSubmit={this.props.handleSubmit} poll={this.props.poll} />
          </Col>
          <Col xs={12} md={8}>
            <Doughnut data={this.props.chartData} />
            <div className="text-center add-margin-top">{deleteButton}</div>
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