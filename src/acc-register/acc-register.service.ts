import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User } from '../shared/interfaces/user.interface';
import * as generatePassword from 'generate-password';

@Injectable()
export class AccRegisterService {
	constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
	public async saveUsers(userDetail: User): Promise<User> {
		const password = generatePassword.generate({
			length: 10,
			numbers: true
		});
		userDetail.password = password;
		const user = new this.userModel(userDetail);
		return await user.save();
	}
}
