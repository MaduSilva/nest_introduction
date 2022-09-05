import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Song } from './shared/song';
import { SongService } from './shared/song.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongService) {}

  @Get()
  async getAll(): Promise<Song[]> {
    return this.songService.getAll();
  }

  @Get(':id')
  //pega o parametro id e atribui em id
  async getById(@Param('id') id: number): Promise<Song> {
    return this.songService.getById(id);
  }

  @Post()
  async create(@Body() song: Song): Promise<Song> {
    return this.songService.create(song);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() song: Song): Promise<Song> {
    song.id = id;
    return this.songService.update(song);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.songService.delete(id);
  }
}
