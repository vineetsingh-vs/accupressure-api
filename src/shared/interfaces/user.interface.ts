import { Document } from 'mongoose';

export interface Login extends Document {
	id?: string;
	fullName: string;
	userName: string;
	password: string;
	email: string;
	mobile: string;
	gender: string;
	profession: string;
	city: string;
	country: string;
	joining: Date
}
