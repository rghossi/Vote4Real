import React from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import polls from '../data/polls';
import NotFoundPage from './NotFoundPage';
import VoteBox from './VoteBox';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router';

export default class PollPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      poll: null,
      previousPoll: null,
      nextPoll: null
    };
  }

  fetchPoll() {
    const id = parseInt(this.props.params.id);
    const poll = polls.filter((poll) => poll.id === id)[0];
    const index = polls.indexOf(poll);

    if (index !== 0){
      var previousPoll = polls[index-1];
    }
    if (index !== polls.length-1){
      var nextPoll = polls[index+1];
    }

    this.setState({ poll, previousPoll, nextPoll });
  }

  componentDidMount () {
    this.fetchPoll();
  }

  componentDidUpdate (prevProps) {
    let oldId = prevProps.params.id;
    let newId = this.props.params.id;
    if (newId !== oldId)
      this.fetchPoll();
  }

  render() {
    if (!this.state.poll) {
      return <NotFoundPage/>;
    }
    const colors = ['#56E2CF','#56AEE2','#8A56E2', '#CF56E2', '#E256AE', '#E25668', '#E28956', '#E2CF56', '#AEE256'];
    const data = {
      labels: this.state.poll.options.map((o) => {return o.desc}),
      datasets: [{
        data: this.state.poll.options.map((o) => {return o.count}),
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
    };
    const previous = () => {
      if (this.state.previousPoll){
        return <Link className="pager-item" to={`/poll/${this.state.previousPoll.id}`}>&larr; Previous</Link>;
      }
    }
    const next = () => {
      if (this.state.nextPoll){
        return <Link className="pager-item" to={`/poll/${this.state.nextPoll.id}`}>Next &rarr;</Link>;
      }
    }
    return (
      <div>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='text-center'><small>{this.state.poll.name}</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <VoteBox poll={this.state.poll} />
          </Col>
          <Col xs={12} md={8}>
            <Doughnut data={data} />
          </Col>
        </Row>
        <Pager>
          {previous()}
          {next()}
        </Pager>
      </div>
    );
  }
}