import React from 'react';
import PollPage from './PollPage';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import Loader from 'react-loader';

export default class PollPageContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      poll: null,
      previousPoll: null,
      nextPoll: null,
      loaded: false,
      selectedItem: -1
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchPolls() {
    const id = this.props.params.id;
    axios.get("../api/polls").then( res => {
      const polls = res.data.polls;
      const poll = polls.filter((poll) => poll._id === id)[0];
      const index = polls.indexOf(poll);
      if (index !== 0){
        var previousPoll = polls[index-1];
      }
      if (index !== polls.length-1){
        var nextPoll = polls[index+1];
      }
      const loaded = true;
      this.setState({ poll, previousPoll, nextPoll, loaded });
    }).catch(err => {
      console.log(err);
    });
  }

  handleSubmit(){
    if (this.state.selectedItem === -1) return;
    const url = "../api/poll/" + this.state.poll._id;
    axios.put(url, {
      selectedItemId: this.state.selectedItem
    }).then((res) => {
      this.setState({poll: res.data, selectedItem: -1});
    }).catch((err) => {
      alert(err);
    });
  }

  handleSelect(e){
    this.setState({selectedItem: e.target.value});
  }

  componentDidMount () {
    this.fetchPolls();
  }

  componentDidUpdate (prevProps) {
    let oldId = prevProps.params.id;
    let newId = this.props.params.id;
    if (newId !== oldId)
      this.fetchPolls();
  }

  render() {
    if (!this.state.poll)
      return <Loader loaded={this.state.loaded} />;
    const colors = ['#56E2CF','#56AEE2','#8A56E2', '#CF56E2', '#E256AE', '#E25668', '#E28956', '#E2CF56', '#AEE256'];
    const chartData = {
      labels: this.state.poll.options.map((o) => {return o.desc}),
      datasets: [{
        data: this.state.poll.options.map((o) => {return o.count}),
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
    };
    return <PollPage selectedItem={this.state.selectedItem} handleSelect={this.handleSelect} handleSubmit={this.handleSubmit} chartData={chartData} poll={this.state.poll} previousPoll={this.state.previousPoll} nextPoll={this.state.nextPoll} />;
  }
}