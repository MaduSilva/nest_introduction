import { Module } from '@nestjs/common';
import { SongService } from './shared/song.service';
import { SongsController } from './songs.controller';

@Module({
  controllers: [SongsController],
  providers: [SongService],
})
export class SongsModule {}
