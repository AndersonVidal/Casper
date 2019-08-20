import { TestBed } from '@angular/core/testing';

import { NoticeAPIService } from './notice-api.service';

describe('NoticeAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticeAPIService = TestBed.get(NoticeAPIService);
    expect(service).toBeTruthy();
  });
});
