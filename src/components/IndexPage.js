import React from 'react';
import PollPreview from './PollPreview';
import NewPollFormContainer from './NewPollFormContainer';
import axios from 'axios';
import { Button, ListGroup, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader';

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      allPolls: [],
      loaded: false,
      userId: null,
      filter: 'all',
      buttonMessage: 'Show only my polls'
    };
  }

  fetchPolls() {
    axios.get("api/polls").then( res => {
      this.setState({polls: res.data.polls, loaded: true, allPolls: res.data.polls});
    }).catch(err => {
      console.log(err);
    });
  }

  isLoggedIn() {
    axios.get("api/isLoggedIn").then( res => {
      this.setState({userId: res.data.userId});
      this.fetchPolls();
    }).catch(err => {
      console.log(err);
    });
  }

  toggleButton() {
    if (this.state.filter === 'all'){
      this.setState({buttonMessage: 'Show all', filter: 'mine', polls: this.state.polls.filter((poll) => {return poll.author === this.state.userId})});
    } else {
      this.setState({buttonMessage: 'Show only my polls', filter: 'all', polls: this.state.allPolls});
    }
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  render() {
    let pollForm;
    let button;
    if (this.state.userId) {
      pollForm = <NewPollFormContainer userId={this.state.userId}/>
      button = <Button className="list-item-box btn-warning" onClick={this.toggleButton.bind(this)} block>{this.state.buttonMessage}</Button>
    } else {
      pollForm = <p>Log in first so you can create your own polls.</p>;
    }
    return (
    <Row>
      <Loader loaded={this.state.loaded}>
        <Col xs={12} md={6}>
          {pollForm}
        </Col>
        <Col xs={12} md={6}>
          {button}
          <ListGroup>
  	      	{this.state.polls.map(pollData => <PollPreview filter={this.state.filter} key={pollData._id} {...pollData} />)}
          </ListGroup>
        </Col>
      </Loader>
    </Row>
    );
  }
}