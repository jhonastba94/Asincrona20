import { TestBed } from '@angular/core/testing';

import { UserintersectorService } from './userintersector.service';

describe('UserintersectorService', () => {
  let service: UserintersectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserintersectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
