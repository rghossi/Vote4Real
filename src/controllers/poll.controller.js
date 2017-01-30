import Poll from '../models/Poll';

export function getPolls(req, res) {
	Poll.find().exec((err, polls) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json({polls});
		}
	})
}