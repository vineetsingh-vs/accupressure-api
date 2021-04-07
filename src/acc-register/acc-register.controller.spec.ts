import { Test, TestingModule } from '@nestjs/testing';
import { AccRegisterController } from './acc-register.controller';

describe('AccRegisterController', () => {
  let controller: AccRegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccRegisterController],
    }).compile();

    controller = module.get<AccRegisterController>(AccRegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
