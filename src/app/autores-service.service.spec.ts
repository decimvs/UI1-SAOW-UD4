import { TestBed } from '@angular/core/testing';

import { AutoresServiceService } from './autores-service.service';

describe('AutoresServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoresServiceService = TestBed.get(AutoresServiceService);
    expect(service).toBeTruthy();
  });
});
