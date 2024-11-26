import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/udpate-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    // 에러를 날리는 것 : NestJS가 이미 우리에게 제공하고 있는 예외 처리이다.
    // HttpException에서 확장된 NestJS에서 제공하는 에러 처리 기능
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: number): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
