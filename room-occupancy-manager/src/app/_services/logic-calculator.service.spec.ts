import { TestBed } from '@angular/core/testing';

import { LogicCalculatorService } from './logic-calculator.service';
import { HotelRooms } from '../_models/hotel-rooms';

describe('LogicCalculatorService', () => {
  let service: LogicCalculatorService;

  let testCase1 : HotelRooms = {
    businessRooms: 3,
    economyRooms: 3
  };

  let testCase2 : HotelRooms = {
    businessRooms: 7,
    economyRooms: 5
  };

  let testCase3 : HotelRooms = {
    businessRooms: 2,
    economyRooms: 7
  };

  let testCase4 : HotelRooms = {
    businessRooms: 7,
    economyRooms: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct values', () =>{
    let result = service.calculateRoomDelegation(testCase1);

    expect(result.businessRoomsAvailable).toBe(3);
    expect(result.businessRoomsUsage.length).toBe(3);
    expect(result.businessRoomsValue).toBe(738);

    expect(result.economyRoomsAvailable).toBe(3);
    expect(result.economyRoomsUsage.length).toBe(3);
    expect(result.economyRoomsValue).toBe(167);
  })

  it('should return correct values', () =>{
    let result = service.calculateRoomDelegation(testCase2);

    expect(result.businessRoomsAvailable).toBe(7);
    expect(result.businessRoomsUsage.length).toBe(6);
    expect(result.businessRoomsValue).toBe(1054);

    expect(result.economyRoomsAvailable).toBe(5);
    expect(result.economyRoomsUsage.length).toBe(4);
    expect(result.economyRoomsValue).toBe(189);
  })

  it('should return correct values', () =>{
    let result = service.calculateRoomDelegation(testCase3);

    expect(result.businessRoomsAvailable).toBe(2);
    expect(result.businessRoomsUsage.length).toBe(2);
    expect(result.businessRoomsValue).toBe(583);

    expect(result.economyRoomsAvailable).toBe(7);
    expect(result.economyRoomsUsage.length).toBe(4);
    expect(result.economyRoomsValue).toBe(189);
  })

  it('should return correct values', () =>{
    let result = service.calculateRoomDelegation(testCase4);

    expect(result.businessRoomsAvailable).toBe(7);
    expect(result.businessRoomsUsage.length).toBe(7);
    expect(result.businessRoomsValue).toBe(1153);

    expect(result.economyRoomsAvailable).toBe(1);
    expect(result.economyRoomsUsage.length).toBe(1);
    expect(result.economyRoomsValue).toBe(45);
  })

});
