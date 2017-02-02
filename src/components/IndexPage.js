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
      userID: null
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

  componentWillReceiveProps(nextProps) {
    if(this.props.userID !== nextProps.userID) {
      this.setState({userID: nextProps.userID});
    }
  } 

  render() {
    return (
    <Row>
      <Col xs={12} md={6}>
        <NewPollFormContainer userID={this.state.userID} />
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