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
		const userDoc = await this.loginModel.findOne(data);
		if (!!userDoc['_doc']) {
			let user: User = userDoc['_doc'];
			user['password'] = '';
			return user;
		}
		return null;
	}
}
