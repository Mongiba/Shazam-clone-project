import { TestBed } from '@angular/core/testing';

import { HeadphoneService } from './headphone.service';

describe('HeadphoneService', () => {
  let service: HeadphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
