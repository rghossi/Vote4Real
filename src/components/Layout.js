import React from 'react';
import { Link } from 'react-router';
import { Grid, PageHeader, Row, Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Vote4Real</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Login</NavItem>
              <NavItem eventKey={2} href="#">About</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Grid>
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