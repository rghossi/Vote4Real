import React from 'react';
import FacebookLogin from 'react-facebook-login';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

export default class FacebookLoginContainer extends React.Component {

	componentClicked() {
		console.log("cla");
	}

	responseFacebook(res) {
		console.log(res);
	};

	render() {
		return(
			<FacebookLogin
		    appId="819629041508693"
		    autoLoad={true}
		    fields="name,email,picture"
		    onClick={this.componentClicked}
		    callback={this.responseFacebook}
		    cssClass="my-facebook-button"
		    icon={<TiSocialFacebookCircular />} />
		);
	}

}