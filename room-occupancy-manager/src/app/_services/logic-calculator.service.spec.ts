import { TestBed } from '@angular/core/testing';

import { LogicCalculatorService } from './logic-calculator.service';

describe('LogicCalculatorService', () => {
  let service: LogicCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
