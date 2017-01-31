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
	poll.save((err, poll) => {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		}
		else res.json(poll);
	});
}

export function computeNewVote(req, res){
	const pollId = req.params.id;
	Poll.findOne({_id: pollId}, (err, poll) => {
		if (poll.saveVote(pollId, null)){
			poll.totalVotes++;
			poll.save((err) => {
				if (err) res.status(500).send(err);
				else res.json(poll);
			});
		} else {
			if (err) res.status(500).send({message: "Something went wrong!"});
		}
	});
};