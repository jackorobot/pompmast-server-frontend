import { TestBed } from '@angular/core/testing';

import { SoundboardService } from './soundboard.service';

describe('SoundboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoundboardService = TestBed.get(SoundboardService);
    expect(service).toBeTruthy();
  });
});
