import React from 'react';
import { Link } from 'react-router';
import FacebookLoginContainer from './FacebookLoginContainer';
import { Grid, PageHeader, Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      notLoggedInMessageClass: '',
      user: null
    }
  }

  login() {
    this.setState({loggedIn: true, notLoggedInMessageClass: 'hidden', userID: localStorage.getItem('userID')});
  }

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        userID: this.state.userID,
        bla: "bla"
      })
    })
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Vote4Real</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1}><FacebookLoginContainer login={this.login.bind(this)} /></NavItem>
          </Nav>
        </Navbar>
        <Grid>
          <p className={this.state.notLoggedInMessageClass}>Log in with facebook and start voting or creating your own polls.</p>
          {children}
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