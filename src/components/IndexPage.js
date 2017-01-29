import React from 'react';
import ContestPreview from './ContestPreview';
import contests from '../data/contests';
import { ListGroup, Row, Col } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  render() {
    return (
    <ListGroup>
      <Col xs={12} md={6}>
      	{contests.map(contestData => <ContestPreview key={contestData.id} {...contestData} />)}
	  </Col>
    </ListGroup>
    );
  }
}