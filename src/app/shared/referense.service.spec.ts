/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReferenseService } from './referense.service';

describe('Service: Referense', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenseService]
    });
  });

  it('should ...', inject([ReferenseService], (service: ReferenseService) => {
    expect(service).toBeTruthy();
  }));
});