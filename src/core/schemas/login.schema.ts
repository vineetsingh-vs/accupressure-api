import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
	userName: String,
	password: String
});
