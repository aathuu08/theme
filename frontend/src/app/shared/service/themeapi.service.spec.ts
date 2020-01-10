import { TestBed } from '@angular/core/testing';

import { ThemeapiService } from './themeapi.service';

describe('ThemeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeapiService = TestBed.get(ThemeapiService);
    expect(service).toBeTruthy();
  });
});
