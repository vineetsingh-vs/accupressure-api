import { Body, CacheInterceptor, CacheKey, CacheTTL, Controller, Post, UseInterceptors } from '@nestjs/common';
import { User } from '../shared/interfaces/user.interface';
import { AccRegisterService } from '../acc-register/acc-register.service';
import { RegisterDTO } from '../acc-register/dtos/register.dto';
import { BenchmarkInterceptor } from '../shared/interceptors/benchmark.interceptors';

@Controller('register')
@UseInterceptors(CacheInterceptor, BenchmarkInterceptor)
export class AccRegisterController {
	constructor(private readonly registerService: AccRegisterService) {
	}

	@Post()
	public register(@Body() login: RegisterDTO): Promise<User> {
		return this.registerService.saveUsers(<User>login);
	}
}
