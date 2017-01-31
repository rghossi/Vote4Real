import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const PollSchema = new Schema({
	title: { type: String, trim: true },
	options: [{
		id: Number,
		desc: { type: String, trim: true },
		count: { type: Number, default: 0 },
		users: [{ type: Schema.ObjectId, ref: 'User' }]
	}],
	totalVotes: { type: Number, default: 0 },
	createdAt: { type: Date, default: Date.now }
});

PollSchema.methods = {
	saveVote: function(optionId, userId){
		const index = this.options.map(option => option.id).indexOf(optionId);
		if (index) {
			this.options[index].count++;
			this.options[index].users.push(userId);
			return this.save();
		} else {
			throw new Error('Option not found!');
		}
	}
}

export default Mongoose.model('Poll', PollSchema);