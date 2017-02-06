import React from 'react';
import PollPreview from './PollPreview';
import NewPollFormContainer from './NewPollFormContainer';
import axios from 'axios';
import { ListGroup, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader';

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      loaded: false,
      userId: null
    };
  }

  fetchPolls() {
    axios.get("api/polls").then( res => {
      this.setState({polls: res.data.polls, loaded: true});
    }).catch(err => {
      console.log(err);
    });
  }

  isLoggedIn() {
    axios.get("api/isLoggedIn").then( res => {
      this.setState({userId: res.data.userId});
    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.fetchPolls();
    this.isLoggedIn();
  }

  render() {
    let pollForm;
    if (this.state.userId) {
      pollForm = <NewPollFormContainer />
    } else {
      pollForm = <p>Log in first so you can create your own polls.</p>;
    }
    return (
    <Row>
      <Col xs={12} md={6}>
        {pollForm}
      </Col>
      <Col xs={12} md={6}>
        <ListGroup>
          <Loader loaded={this.state.loaded}>
	      	  {this.state.polls.map(pollData => <PollPreview key={pollData._id} {...pollData} />)}
		      </Loader>
        </ListGroup>
      </Col>
    </Row>
    );
  }
}