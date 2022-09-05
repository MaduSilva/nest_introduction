import { Injectable } from '@nestjs/common';
import { Song } from './song';

@Injectable()
export class SongService {
  songs: Song[] = [
    { id: 1, singer: 'Ive', name: 'After Like', released: true },
    { id: 2, singer: 'Ive', name: 'Eleven', released: true },
    { id: 3, singer: 'Ive', name: 'Royal', released: true },
    { id: 4, singer: 'Ive', name: 'Love Dive', released: true },
    { id: 5, singer: 'Ive', name: 'Take It', released: true },
    { id: 6, singer: 'Ive', name: 'My Satisfaction', released: true },
    { id: 7, singer: 'Le sserafim', name: 'Fearless', released: true },
    { id: 8, singer: 'Le sserafim', name: 'Blue Flame', released: true },
    { id: 9, singer: 'NewJeans', name: 'Attention', released: true },
    { id: 10, singer: 'NewJeans', name: 'Hype Boy', released: true },
  ];

  getAll() {
    return this.songs;
  }

  getById(id: number) {
    const song = this.songs.find((value) => value.id == id);
    return song;
  }

  create(song: Song) {
    let lastId = 0;
    if (this.songs.length > 0) {
      lastId = this.songs[this.songs.length - 1].id;
    }

    song.id = lastId + 1;
    this.songs.push(song);
    return song;
  }

  update(song: Song) {
    const songArray = this.getById(song.id);
    if (songArray) {
      songArray.name = song.name;
      songArray.released = song.released;
      songArray.singer = song.singer;
    }

    return songArray;
  }

  delete(id: number) {
    const index = this.songs.findIndex((value) => value.id == id);
    this.songs.splice(index, 1);
  }
}
