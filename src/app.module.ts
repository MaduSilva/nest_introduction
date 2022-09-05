import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './songs/songs.controller';
import { SongService } from './songs/shared/song.service';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [SongsModule],
  controllers: [AppController, SongsController],
  providers: [AppService, SongService],
})
export class AppModule {}
