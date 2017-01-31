import Poll from '../models/Poll';

export function getPolls(req, res) {
	Poll.find({}, (err, polls) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json({polls});
		}
	});
}

export function createNewPoll(req, res){
	let poll = new Poll({
		title: req.body.title,
		options: req.body.options
	});
	if (req.body.author){
		poll.author = req.body.author;
	};
	poll.save((err) => {
		if (err) console.log(err);
	});
}