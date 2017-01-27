import React from 'react';
import { Link } from 'react-router';
import { ListGroupItem } from 'react-bootstrap';

export default class ContestPreview extends React.Component {
  render() {
    return (
      <Link to={`/contest/${this.props.id}`}>
        <ListGroupItem>
          <p className="name">{this.props.name}</p>
          <small>Total Votes: {this.props.totalVotes}</small>
        </ListGroupItem>
      </Link>
    );
  }
}