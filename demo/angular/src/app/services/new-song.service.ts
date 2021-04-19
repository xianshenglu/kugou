import { BASE_ORIGIN } from 'src/app/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
type NewSongResponse = {
  data: [];
  banner: [];
};
@Injectable({
  providedIn: 'root',
})
export class NewSongService {
  constructor(private http: HttpClient) {}

  fetchNewSong(params = {}): Promise<NewSongResponse> {
    // @ts-ignore
    return this.http
      .get(BASE_ORIGIN, {
        // @ts-ignore
        params: { json: true, ...params },
        observe: 'body',
        responseType: 'json',
      })
      .toPromise();
  }
}
