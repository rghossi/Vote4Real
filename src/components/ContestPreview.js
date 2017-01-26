import React from 'react';
import { Link } from 'react-router';

export default class ContestPreview extends React.Component {
  render() {
    return (
      <Link to={`/contest/${this.props.id}`}>
        <div className="contest-preview">
          <h2 className="name">{this.props.name}</h2>
          <span className="votes-count">{this.props.totalVotes}</span>
        </div>
      </Link>
    );
  }
}