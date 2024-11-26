import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // 이런 식으로 테스트 파일 작성!
  // npm run test:xxx 명령어로 테스트 실행
  it('should be 4', () => {
    expect(2 + 2).toEqual(4);
  });
});
