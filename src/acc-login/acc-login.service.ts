import {Inject, Injectable} from '@nestjs/common';
import { User } from '../shared/interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {DecryptionService} from '../core/services/decryption.service';
import * as moment from 'moment';

@Injectable()
export class AccLoginService {
	constructor(@InjectModel('User') private readonly loginModel: Model<User>, @Inject('DecryptionService') private readonly decryptionService: DecryptionService,
				@InjectModel('User') private readonly userModel: Model<User>) {}
	public async findUser(userDetail: User): Promise<User> {
		let data;
		if(userDetail.emailId.length > 0 && userDetail.password.length > 0) {
			data = {
				emailId: userDetail.emailId,
				password: this.decryptionService.decrypt(userDetail.password),
				isActive: true
			};
		}
		const userDoc = await this.loginModel.findOne(data);
		if (!!userDoc && !!userDoc['_doc']) {
			let user: User = userDoc['_doc'];
			if (this.isCurrentUser(user.registrationDate)) {
				user['password'] = '';
				return user;
			} else {
				user.isActive = false;
				debugger;
				const inactiveUser = new this.userModel(user);
				await this.userModel.updateOne({_id: inactiveUser._id}, inactiveUser);
			}
		}
		return null;
	}

	private isCurrentUser(registrationDate: Date) : boolean {
		return moment().subtract(365, 'days').diff(moment(registrationDate), 'days') < 0;
	}
}
