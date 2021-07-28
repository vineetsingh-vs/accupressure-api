import {Inject, Injectable} from '@nestjs/common';
import {User} from "../shared/interfaces/user.interface";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ResetDTO} from "./dtos/reset.dto";
import {DecryptionService} from "../core/services/decryption.service";

@Injectable()
export class AccResetService {
    constructor(@InjectModel('User') private readonly loginModel: Model<User>, @Inject('DecryptionService') private readonly decryptionService: DecryptionService) {}
    public async resetPassword(userDetail: ResetDTO): Promise<boolean> {
        let data;
        if(userDetail.emailId.length > 0 && userDetail.oldPassword.length > 0 && userDetail.newPassword.length > 0) {
            data = {
                emailId: userDetail.emailId,
                password: this.decryptionService.decrypt(userDetail.oldPassword)
            };
        }
         const user = await this.loginModel.findOne(data);
        if (!!user) {
            await this.loginModel.updateOne({'emailId' : user.emailId}, {$set: { 'password' : this.decryptionService.decrypt(userDetail.newPassword)}});
            return Promise.resolve(true);
        }
       return false;
    }
}
