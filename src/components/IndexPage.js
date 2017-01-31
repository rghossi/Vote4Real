import React from 'react';
import PollPreview from './PollPreview';
import NewPollForm from './NewPollForm';
import axios from 'axios';
import { ListGroup, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader';

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      loaded: false
    };
  }

  fetchPolls() {
    axios.get("api/polls").then( res => {
      this.setState({polls: res.data.polls, loaded: true});
    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.fetchPolls();
  }

  render() {
    return (
    <Row>
      <Col xs={12} md={6}>
        <NewPollForm />
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