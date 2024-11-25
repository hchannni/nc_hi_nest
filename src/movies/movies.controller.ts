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

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // @Get에서 '/' 이거 없어도 됨
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() newMovieData) {
    console.log(newMovieData);
    return newMovieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
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
