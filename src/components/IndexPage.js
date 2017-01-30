import React from 'react';
import PollPreview from './PollPreview';
import polls from '../data/polls';
import { ListGroup, Row, Col } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  render() {
    return (
    <Row>
	    <ListGroup>
	      <Col xs={12} md={6}>
	      	{polls.map(pollData => <PollPreview key={pollData.id} {...pollData} />)}
		  </Col>
	    </ListGroup>
    </Row>
    );
  }
}