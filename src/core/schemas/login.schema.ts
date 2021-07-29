import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
		fullName: String,
		emailId: {
			type: String,
			required: true,
			index: {unique: true}
		},
		password: String,
		orderId: String,
		registrationDate: Date,
		isActive: Boolean
	})
;
