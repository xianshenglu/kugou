import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SongListService } from './song-list.service';

describe('SongListService', () => {
  let service: SongListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SongListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetchSongList return expected transformed data', () => {
    const mockResponse = {
      plist: {
        list: {
          info: [
            {
              specialname: '大手牵小手，以后的路一起走',
              imgurl:
                'http://c1.kgimg.com/custom/{size}/20210511/20210511093424403485.jpg',
              specialid: 3804686,
              playcount: 10989,
            },
          ],
        },
      },
    };
    const expectedResponse = [
      {
        specialname: '大手牵小手，以后的路一起走',
        imgurl:
          'http://c1.kgimg.com/custom/{size}/20210511/20210511093424403485.jpg',
        specialid: 3804686,
        playcount: 10989,
        imgUrl:
          'http://c1.kgimg.com/custom/400/20210511/20210511093424403485.jpg',
        path: '/song/list/3804686',
        title: '大手牵小手，以后的路一起走',
        popularity: 10989,
      },
    ];
    service.fetchSongList().then((result) => {
      expect(result).toEqual(expectedResponse);
    });
    const reqMatches = httpTestingController.match((req) =>
      req.urlWithParams.includes(`${service.songListUrl}`)
    );

    reqMatches[0].flush(mockResponse);
  });
});
