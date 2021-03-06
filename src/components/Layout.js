import React from 'react';
import { Link } from 'react-router';
import { Grid, PageHeader, Nav, Navbar, NavItem } from 'react-bootstrap';
import axios from 'axios';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      userId: null,
      loaded: false
    }
  }

  isLoggedIn() {
    let path = '';
    if (typeof window !== 'undefined') {
      path = location.protocol + '//' + location.host;
    }
    axios.get(path + "/api/isLoggedIn").then( res => {
      this.setState({userId: res.data.userId, loaded:true});
    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  render() {
    let loginLink;
    if (!this.state.loaded) {
      loginLink = null;
    } else if (!this.state.userId) {
      loginLink = <a href="/api/login">Login</a>
    } else {
      loginLink = <a href="/api/logout">Logout</a>
    }
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Vote4Real</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              {loginLink}
            </Navbar.Brand>
          </Navbar.Header>
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