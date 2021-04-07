import {CacheModule, Module} from '@nestjs/common';
import { AccResetController } from './acc-reset.controller';
import { AccResetService } from './acc-reset.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

const modules = [
  CoreModule,
  SharedModule,
  CacheModule.register({
    ttl: 5, // seconds
    max: 100 //maximum
  })
];

@Module({
  imports: [...modules],
  controllers: [AccResetController],
  providers: [AccResetService]
})
export class AccResetModule {}
