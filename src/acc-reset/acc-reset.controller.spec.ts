import { Test, TestingModule } from '@nestjs/testing';
import { AccResetController } from './acc-reset.controller';

describe('AccResetController', () => {
  let controller: AccResetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccResetController],
    }).compile();

    controller = module.get<AccResetController>(AccResetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
