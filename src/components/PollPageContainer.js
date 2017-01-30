import React from 'react';
import PollPage from './PollPage';
import NotFoundPage from './NotFoundPage';

import polls from '../data/polls';

export default class PollPageContainer extends React.Component {

  constructor() {
    super();
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
    if (!this.state.poll)
      return <NotFoundPage />;
    const colors = ['#56E2CF','#56AEE2','#8A56E2', '#CF56E2', '#E256AE', '#E25668', '#E28956', '#E2CF56', '#AEE256'];
    const chartData = {
      labels: this.state.poll.options.map((o) => {return o.desc}),
      datasets: [{
        data: this.state.poll.options.map((o) => {return o.count}),
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
    };
    return <PollPage chartData={chartData} poll={this.state.poll} previousPoll={this.state.previousPoll} nextPoll={this.state.nextPoll} />;
  }
}