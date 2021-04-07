import { Module } from '@nestjs/common';
import { AccModule } from './acc-login/acc.module';
import { AccRegisterModule } from './acc-register/acc-register.module';
import { AccResetModule } from './acc-reset/acc-reset.module';

@Module({
  imports: [AccModule, AccRegisterModule, AccResetModule],
  controllers: [],
  providers: [],

})
export class AppModule {}
