import React from 'react';
import { Link } from 'react-router';
import { Grid, PageHeader, Row } from 'react-bootstrap';

export default class Layout extends React.Component {
  render() {
    return (
      <Grid>
        <header>
          <Link to="/">
          <PageHeader>
            <h1>Vote4Real</h1>
          </PageHeader>
            
          </Link>
        </header>
        <Row className="show-grid">{this.props.children}</Row>
        <footer>
          <p>
            Demo SPA to showcase <strong>React</strong>, <strong>Node</strong>, <strong>Express</strong> and <strong>MongoDB</strong>.
          </p>
        </footer>
      </Grid>
    );
  }
}