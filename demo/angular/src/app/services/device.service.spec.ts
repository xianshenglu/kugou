import { TestBed } from '@angular/core/testing';

import { DeviceService } from './device.service';

describe('DeviceService', () => {
  let service: DeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should vh,vMax be valid value', () => {
    expect(typeof service.vh).toBe('number');
    expect(typeof service.vMax).toBe('number');
    expect(service.vMax).toBeGreaterThanOrEqual(service.vh);
  });
});
