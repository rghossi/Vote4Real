import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String, trim: true },
	email: { type: String, trim: true },
	facebookId: { type: Number, unique: true },
	pictureUrl : String,
	createdAt: { type: Date, default: Date.now }
});

export default Mongoose.model('User', UserSchema);