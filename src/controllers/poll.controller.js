import Poll from '../models/Poll';

function getIpsThatVoted(options){
	const messyIps = options.map((o) => o.ips);
	const mergedIps = [].concat.apply([], messyIps);
	return mergedIps;
}

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
	let ipAddr = req.headers["x-forwarded-for"];
	if (ipAddr){
		let list = ipAddr.split(",");
		ipAddr = list[list.length-1];
	} else {
		ipAddr = req.connection.remoteAddress;
	}

	Poll.findById(pollId, (err, poll) => {
		const index = poll.options.map(option => option.id ).indexOf(optionId);
		if (index > -1) {
			const optionSelected = poll.options[index];
			if (getIpsThatVoted(poll.options).indexOf(ipAddr) >=0){
				res.status(403).send("You already voted! (Ip-based check)");
				return;
			}
			optionSelected.ips.push(ipAddr);
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
			res.status(500).send("Option not found!");
		}
	});
};