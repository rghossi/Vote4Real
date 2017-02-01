import React from 'react';
import { Link } from 'react-router';
import FacebookLoginContainer from './FacebookLoginContainer';
import { Grid, PageHeader, Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Vote4Real</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1}><FacebookLoginContainer /></NavItem>
          </Nav>
        </Navbar>
        <Grid>
          {this.props.children}
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