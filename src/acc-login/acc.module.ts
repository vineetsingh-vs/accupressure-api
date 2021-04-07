import { Module } from '@nestjs/common';

import { AccLoginController } from './acc-login.controller';
import { AccLoginService } from './acc-login.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

const modules = [
	CoreModule,
	SharedModule
];

@Module({
	imports: [...modules],
	controllers: [AccLoginController],
	providers: [AccLoginService],
})

export class AccModule {

}

