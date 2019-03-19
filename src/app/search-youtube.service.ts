import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchYoutubeService {

  constructor(private http: HttpClient) { }

  // not used
  searchYouTube() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=%23%23Createology&key=APIKEY')
  };
}
