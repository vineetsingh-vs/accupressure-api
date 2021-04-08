import {Body, CacheInterceptor, Controller, Post, UseInterceptors} from '@nestjs/common';
import {BenchmarkInterceptor} from "../shared/interceptors/benchmark.interceptors";
import {AccResetService} from "./acc-reset.service";
import {ResetDTO} from "./dtos/reset.dto";

@Controller('reset')
@UseInterceptors(CacheInterceptor, BenchmarkInterceptor)
export class AccResetController {
    constructor(private readonly resetService: AccResetService) {
    }

    @Post()
    public reset(@Body() reset: ResetDTO): Promise<boolean> {
        return this.resetService.resetPassword(reset);
    }
}
