import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
		fullName: String,
		emailId: {
			type: String,
			required: true,
			index: {unique: true, dropDups: true}
		},
		password: String,
		orderId: String
	})
;
