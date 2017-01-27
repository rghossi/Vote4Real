import React from 'react';
import ContestPreview from './ContestPreview';
import contests from '../data/contests';
import { ListGroup } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <ListGroup>
          {contests.map(contestData => <ContestPreview key={contestData.id} {...contestData} />)}
        </ListGroup>
      </div>
    );
  }
}