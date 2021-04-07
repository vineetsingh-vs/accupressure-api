import { Injectable } from '@nestjs/common';
import {User} from "../shared/interfaces/user.interface";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ResetDTO} from "./dtos/reset.dto";

@Injectable()
export class AccResetService {
    constructor(@InjectModel('User') private readonly loginModel: Model<User>) {}
    public async resetPassword(userDetail: ResetDTO): Promise<String> {
        let data;
        if(userDetail.emailId.length > 0 && userDetail.oldPassword.length > 0 && userDetail.newPassword.length > 0) {
            data = {
                emailId: userDetail.emailId,
                password: userDetail.oldPassword
            };
        }
         const user = await this.loginModel.findOne(data);
     //   user.password = userDetail.newPassword;
        debugger;
        const newUser = await this.loginModel.updateOne({'id' : user.id}, {$set: { 'password' : userDetail.newPassword}});
        return JSON.stringify((newUser || {}).emailId);
    }
}
