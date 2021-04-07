import { Injectable } from '@nestjs/common';
import { User } from '../shared/interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccLoginService {
	constructor(@InjectModel('User') private readonly loginModel: Model<User>) {}
	public async findUser(userDetail: User): Promise<User> {
		let data;
		if(userDetail.emailId.length > 0 && userDetail.password.length > 0) {
			data = {
				emailId: userDetail.emailId,
				password: userDetail.password
			};
		}
		return await this.loginModel.findOne(data)
	}
}
