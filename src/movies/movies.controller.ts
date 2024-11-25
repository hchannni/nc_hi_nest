import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // @Get에서 '/' 이거 없어도 됨
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() newMovieData) {
    return this.moviesService.create(newMovieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  // movie의 일부분만 업데이트할 때는 @Patch 사용
  // @Put은 전체를 업데이트할 때 사용
  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updatedMovieData) {
    return {
      updatedMovie: movieId,
      ...updatedMovieData,
    };
  }
}
