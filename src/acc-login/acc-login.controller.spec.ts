import { Test, TestingModule } from '@nestjs/testing';
import { AccLoginController } from './acc-login.controller';

describe('AccLoginController', () => {
  let controller: AccLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccLoginController],
    }).compile();

    controller = module.get<AccLoginController>(AccLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
