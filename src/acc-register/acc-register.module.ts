import { MiddlewareConsumer, Module, NestModule, RequestMethod,CacheModule } from '@nestjs/common';
import { AccRegisterController } from './acc-register.controller';
import { AccRegisterService } from './acc-register.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { PreprocessorMiddleware } from '../shared/middleware/preprocess.middleware';

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
  controllers: [AccRegisterController],
  providers: [AccRegisterService]
})
export class AccRegisterModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PreprocessorMiddleware)
      .forRoutes({ path: 'register/*', method: RequestMethod.POST });
  }
}
