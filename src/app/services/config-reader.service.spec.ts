import { TestBed } from '@angular/core/testing';

import { ConfigReaderService } from './config-reader.service';

describe('ConfigReaderService', () => {
  let service: ConfigReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
