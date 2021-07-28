import {Inject, Injectable} from '@nestjs/common';
import { User } from '../shared/interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {DecryptionService} from '../core/services/decryption.service';

@Injectable()
export class AccLoginService {
	constructor(@InjectModel('User') private readonly loginModel: Model<User>, @Inject('DecryptionService') private readonly decryptionService: DecryptionService) {}
	public async findUser(userDetail: User): Promise<User> {
		let data;
		if(userDetail.emailId.length > 0 && userDetail.password.length > 0) {
			data = {
				emailId: userDetail.emailId,
				password: this.decryptionService.decrypt(userDetail.password)
			};
		}
		const userDoc = await this.loginModel.findOne(data);
		if (!!userDoc && !!userDoc['_doc']) {
			let user: User = userDoc['_doc'];
			user['password'] = '';
			return user;
		}
		return null;
	}
}
