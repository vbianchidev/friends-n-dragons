import { Test, TestingModule } from '@nestjs/testing';
import { SpellbookController } from './spellbook.controller';
import { SpellbookService } from './spellbook.service';

describe('SpellbookController', () => {
  let controller: SpellbookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpellbookController],
      providers: [SpellbookService],
    }).compile();

    controller = module.get<SpellbookController>(SpellbookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
