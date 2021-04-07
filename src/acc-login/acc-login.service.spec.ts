import { Test, TestingModule } from '@nestjs/testing';
import { AccLoginService } from './acc-login.service';

describe('AccLoginService', () => {
  let service: AccLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccLoginService],
    }).compile();

    service = module.get<AccLoginService>(AccLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
