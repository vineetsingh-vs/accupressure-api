import { Test, TestingModule } from '@nestjs/testing';
import { AccResetService } from './acc-reset.service';

describe('AccResetService', () => {
  let service: AccResetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccResetService],
    }).compile();

    service = module.get<AccResetService>(AccResetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
