import React from 'react';
import PollPreview from './PollPreview';
import axios from 'axios';
import { ListGroup, Row, Col } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      polls: []
    };
  }

  fetchPolls() {
    axios.get("api/polls").then( res => {
      this.setState({polls: res.data.polls});
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
	    <ListGroup>
	      <Col xs={12} md={6}>
	      	{this.state.polls.map(pollData => <PollPreview key={pollData._id} {...pollData} />)}
		    </Col>
	    </ListGroup>
    </Row>
    );
  }
}