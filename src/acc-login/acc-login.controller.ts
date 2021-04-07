import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccLoginService } from './acc-login.service';
import { LoginDTO } from './dtos/login.dto';
import { User } from '../shared/interfaces/user.interface';

@Controller('login')
export class AccLoginController {
	constructor(private readonly loginService: AccLoginService) {
	}

	@Post()
	public login(@Body() login: LoginDTO): Promise<any> {
		return this.loginService.findUser(<User>login);
	}
}
