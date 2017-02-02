import React from 'react';
import FacebookLogin from 'react-facebook-login';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import axios from 'axios';

export default class FacebookLoginContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			user: null,
			loggedIn: false
		}
		this.responseFacebook = this.responseFacebook.bind(this);
	}

	saveUser(user) {
		axios.post("api/users", {user}).catch(err => {
			if(err.response.status !== 403)
	      		console.log(err);
	    });
	}

	responseFacebook(res) {
		if (res.userID) {
			this.setState({user: res, loggedIn: true});
			this.saveUser(res);
			localStorage.setItem('userID', res.userID);
			this.props.login();
		}
	};

	render() {
		if (this.state.loggedIn) 
			return (<div>Welcome, {this.state.user.name}</div>);
		else {
			return(
				<FacebookLogin
			    appId="819629041508693"
			    autoLoad={true}
			    fields="name,email,picture"
			    callback={this.responseFacebook}
			    cssClass="my-facebook-button"
			    icon={<TiSocialFacebookCircular />} />
			);
		}
	}

}