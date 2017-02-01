import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const PollSchema = new Schema({
	title: { type: String, trim: true },
	options: [{
		id: Number,
		desc: { type: String, trim: true },
		count: { type: Number, default: 0 },
		users: [{ type: Schema.ObjectId, ref: 'User' }],
		ips: [ String ]
	}],
	author: { type: Schema.ObjectId, ref: 'User' },
	totalVotes: { type: Number, default: 0 },
	createdAt: { type: Date, default: Date.now }
});

export default Mongoose.model('Poll', PollSchema);