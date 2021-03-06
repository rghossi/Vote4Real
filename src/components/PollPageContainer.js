import React from 'react';
import PollPage from './PollPage';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import Loader from 'react-loader';
import { withRouter } from 'react-router' 
import { Button, FormControl, ControlLabel } from 'react-bootstrap';

class PollPageContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      poll: null,
      previousPoll: null,
      nextPoll: null,
      loaded: false,
      selectedItem: -1,
      userId: null,
      newOption: ''
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewOptionChange = this.handleNewOptionChange.bind(this);
    this.handleAddNewOption = this.handleAddNewOption.bind(this);
    this.deletePoll = this.deletePoll.bind(this);
  }

  fetchPolls() {
    const id = this.props.params.id;
    axios.get("../../api/polls").then( res => {
      let polls = [];
      if (this.props.params.filter === "mine") {
        polls = res.data.polls.filter((poll) => poll.author === this.state.userId);
      } else {
        polls = res.data.polls;
      }
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
    const url = "../../api/poll/" + this.state.poll._id;
    axios.put(url, {
      selectedItemId: this.state.selectedItem
    }).then((res) => {
      this.setState({poll: res.data, selectedItem: -1});
    }).catch((err) => {
      if(err.response.status === 403){
        alert(err.response.data);
      } else {
        alert(err.response);
      }
    });
  }

  handleAddNewOption() {
    if (this.state.newOption.length < 1) return;
    const url = "../../api/poll/" + this.state.poll._id;
    axios.post(url, {
      desc: this.state.newOption.trim()
    }).then((res) => {
      this.setState({poll: res.data, newOption: ''});
    }).catch((err) => {
      console.log(err);
    });
  }

  isLoggedIn() {
    axios.get("../../api/isLoggedIn").then( res => {
      this.setState({userId: res.data.userId});
      this.fetchPolls();
    }).catch(err => {
      console.log(err);
    });
  }

  deletePoll() {
    var r = confirm("Are you sure you want to delete this poll?");
    if (!r) return;
    axios.delete("../../api/poll/" + this.state.poll._id + "/" + this.state.userId).then( res => {
      this.props.router.push('/');
    }).catch(err => {
      console.log(err);
    });
  }

  handleSelect(e){
    this.setState({selectedItem: e.target.value});
  }

  handleNewOptionChange(e){
    this.setState({newOption: e.target.value});
  }

  componentDidMount () {
    this.isLoggedIn();
  }

  componentDidUpdate (prevProps) {
    let oldId = prevProps.params.id;
    let newId = this.props.params.id;
    if (newId !== oldId)
      this.isLoggedIn();
  }

  render() {
    let addNewOption;
    if (this.state.userId) {
      addNewOption = <div><ControlLabel>Or...</ControlLabel>
        <FormControl
          type="text"
          value={this.state.newOption}
          placeholder="Type here a new option"
          onChange={this.handleNewOptionChange}
        />
        <Button onClick={this.handleAddNewOption}>
          Add
        </Button></div>;
    } else {
      addNewOption = <p>Log in to be able to add a new option to this poll</p>;
    }
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
    return <PollPage addNewOption={addNewOption} deletePoll={this.deletePoll} userId={this.state.userId} filter={this.props.params.filter} selectedItem={this.state.selectedItem} handleSelect={this.handleSelect} handleSubmit={this.handleSubmit} chartData={chartData} poll={this.state.poll} previousPoll={this.state.previousPoll} nextPoll={this.state.nextPoll} />;
  }
}

export default withRouter(PollPageContainer);