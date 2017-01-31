import React from 'react';
import { Link } from 'react-router';
import { ListGroupItem } from 'react-bootstrap';

export default class PollPreview extends React.Component {
  render() {
    return (
      <Link to={`/poll/${this.props.id}`}>
        <ListGroupItem>
          <p>{this.props.title}</p>
          <small>Total Votes: {this.props.totalVotes}</small>
        </ListGroupItem>
      </Link>
    );
  }
}