import { IsString } from 'class-validator';

export class LoginDTO {
	@IsString()
	public readonly emailId: string;
	@IsString()
	public readonly password: string;
}
