import { Test, TestingModule } from '@nestjs/testing';
import { SpellbookService } from './spellbook.service';

describe('SpellbookService', () => {
  let service: SpellbookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpellbookService],
    }).compile();

    service = module.get<SpellbookService>(SpellbookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
