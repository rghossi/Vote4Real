import User from '../models/User';

export function saveNewUser(req, res){
	let user = new User({
		name: req.body.name,
		email: req.body.email,
		facebookId: req.body.userID,
		pictureUrl: req.body.pictureUrl
	});
	User.findOne({facebookId: req.body.userID}, (err, bdUser) => {
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