import { Test, TestingModule } from '@nestjs/testing';
import { AccRegisterService } from './acc-register.service';

describe('AccRegisterService', () => {
  let service: AccRegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccRegisterService],
    }).compile();

    service = module.get<AccRegisterService>(AccRegisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
