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
	const optionId = parseInt(req.body.selectedItemId);
	const userId = null;
	Poll.findById(pollId, (err, poll) => {
		const index = poll.options.map(option => option.id ).indexOf(optionId);
		if (index > -1) {
			const optionSelected = poll.options[index];
			optionSelected.count++;
			poll.options.set(index, optionSelected);
			if (userId)
				poll.options[index].users.push(userId);
			poll.totalVotes++;
			poll.save(function(err, updatedPoll){
				if (err) res.status(500).send(err);
				else res.json(updatedPoll);
			});
		} else {
			res.status(500).send({message: "Option not found!"});
		}
	});
};