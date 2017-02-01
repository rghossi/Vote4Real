import User from '../models/User';

export function saveNewUser(req, res){
	let user = new User({
		name: req.body.user.name,
		email: req.body.user.email,
		facebookId: req.body.user.userID,
		pictureUrl: req.body.user.picture.data.url
	});
	User.findOne({facebookId: req.body.user.userID}, (err, bdUser) => {
		if (bdUser) {
			res.status(403).send("User previously saved!");
		} else {
			user.save((err, user) => {
			if (err) {
				console.log(err);
				res.status(500).send(err);
			}
			else res.json(user);
		});
		}
	})
}