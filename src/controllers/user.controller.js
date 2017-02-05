import User from '../models/User';

export function isLoggedIn(req, res) {
	res.json({isAuthenticated: req.isAuthenticated()});
}

export function isLoggedInMid(req, res, next) {
	if (req.isAuthenticated()){
		next();
	} else {
		res.redirect('/');
	}
}

export function facebookCallback(accessToken, refreshToken, profile, cb) {
	User.findOne({ facebookId: profile.id }, function (err, user) {
		if (err)
            return cb(err);
        if (user) {
            return cb(null, user);
        } else {
            var newUser = new User();
            newUser.facebookId = profile.id;                
            newUser.facebookToken = token;
            newUser.name  = profile.name.givenName + ' ' + profile.name.familyName;
            newUser.email = profile.emails[0].value;

            newUser.save(function(err) {
                if (err)
                    throw err;
                return cb(null, newUser);
            });
        }
	});
}

export function serialize(user, cb){
	cb(null, user.id);
}

export function deserialize(id, cb){
	User.findById(id, function(err, user) {
		cb(err, user);
	})
}

export function logout(req, res) {
	req.logout();
	res.redirect('/');
}

export function getUserPolls(req, res) {
	//TODO
	res.end();
}