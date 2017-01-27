import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            Voting App
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            Demo SPA to showcase <strong>React</strong>, <strong>Node</strong>, <strong>Express</strong> and <strong>MongoDB</strong>.
          </p>
        </footer>
      </div>
    );
  }
}