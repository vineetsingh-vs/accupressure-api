import { Document } from 'mongoose';

export interface User extends Document {
	id?: string;
	fullName: string;
	emailId: string;
	password: string;
	orderId: string;
}
