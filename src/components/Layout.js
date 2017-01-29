import React from 'react';
import { Link } from 'react-router';
import { Grid, PageHeader, Row } from 'react-bootstrap';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <header>
            <Link to="/">
            <PageHeader>
              <h1>Vote4Real</h1>
            </PageHeader>
              
            </Link>
          </header>
          <Row className="show-grid">{this.props.children}</Row>

        </Grid>
        <footer className="footer">
          <Grid>
            <p className="text-muted">
              Demo SPA to showcase <strong>React</strong>, <strong>Node</strong>, <strong>Express</strong> and <strong>MongoDB</strong>.
            </p>
          </Grid>
        </footer>
      </div>
    );
  }
}