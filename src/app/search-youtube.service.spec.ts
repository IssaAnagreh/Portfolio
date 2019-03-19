import { TestBed } from '@angular/core/testing';

import { SearchYoutubeService } from './search-youtube.service';

describe('SearchYoutubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchYoutubeService = TestBed.get(SearchYoutubeService);
    expect(service).toBeTruthy();
  });
});
