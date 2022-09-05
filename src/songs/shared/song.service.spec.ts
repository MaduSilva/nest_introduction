import { Test, TestingModule } from '@nestjs/testing';
import { SongService } from './song.service';

describe('SongService', () => {
  let provider: SongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongService],
    }).compile();

    provider = module.get<SongService>(SongService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
