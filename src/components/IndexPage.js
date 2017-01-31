import React from 'react';
import PollPreview from './PollPreview';
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
	    <ListGroup>
	      <Col xs={12} md={6}>
          <Loader loaded={this.state.loaded}>
	      	  {this.state.polls.map(pollData => <PollPreview key={pollData._id} {...pollData} />)}
		      </Loader>
        </Col>
	    </ListGroup>
    </Row>
    );
  }
}