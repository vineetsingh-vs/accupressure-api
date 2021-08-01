import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User } from '../shared/interfaces/user.interface';
import * as generatePassword from 'generate-password';

@Injectable()
export class AccRegisterService {
	constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
	public async saveUsers(userDetail: User): Promise<User> {
		let data;
		if(userDetail.emailId.length > 0) {
			data = {
				emailId: userDetail.emailId
			};
		}
		const existingUser = await this.userModel.findOne(data);
		const password = generatePassword.generate({
			length: 10,
			numbers: true
		});
		const user = new this.userModel(userDetail);
		if (existingUser === null) {
			user.password = password;
			user.isActive = true;
			user.registrationDate = new Date();
			return await user.save();
		} else {
			existingUser.password = password;
			existingUser.isActive = true;
			existingUser.registrationDate = new Date();
			await this.userModel.updateOne({_id: existingUser._id}, existingUser);
			return existingUser;
		}
	}
}
