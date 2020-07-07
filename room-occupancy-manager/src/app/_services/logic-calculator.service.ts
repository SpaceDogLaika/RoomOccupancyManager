import { Injectable } from '@angular/core';
import { HotelRooms } from '../_models/hotel-rooms';
import { Result } from '../_models/result.model';

@Injectable({
  providedIn: 'root'
})
export class LogicCalculatorService {

  testData: string = "[23,45,155,374,22,99,100,101,115,209]";
  businessRange: number[];
  economyRange: number[];

  constructor() { 
  }

  public calculateRoomDelegation(hotelRooms: HotelRooms): Result{

    let result: Result = {
      businessRoomsAvailable: 0,
      businessRoomsUsage: [],
      businessRoomsValue: 0,
      economyRoomsAvailable: 0,
      economyRoomsUsage: [],
      economyRoomsValue: 0
    };

    let customersToUpgrade = 0;

    // set the available rooms
    result.businessRoomsAvailable = hotelRooms.businessRooms;
    result.economyRoomsAvailable = hotelRooms.economyRooms;

    this.parseAndSortJSON(this.testData);


    // check if any customers will need to be upgraded
    if (this.businessRange.length < result.businessRoomsAvailable
      && this.economyRange.length > result.economyRoomsAvailable) {
        customersToUpgrade = result.businessRoomsAvailable - this.businessRange.length;
      }

    // add customers to business rooms
    for (let index = 0; index < hotelRooms.businessRooms; index++) {
      if (this.businessRange[index]){
        result.businessRoomsUsage.push(this.businessRange[index]);
      }
    }

    // add customers to economy rooms
    for (let index = 0; index < hotelRooms.economyRooms; index++) {
      // check if any customers require an upgrade
      if (customersToUpgrade > 0 
        && this.economyRange[index]
        && result.businessRoomsAvailable > result.businessRoomsUsage.length){
          result.businessRoomsUsage.push(this.economyRange[index]);
          this.economyRange.shift();
          customersToUpgrade--;
        }
        if (this.economyRange[index]){
          result.economyRoomsUsage.push(this.economyRange[index]);
        }
    }

    result = this.calculateResultValue(result);

    return result;
  }

  private parseAndSortJSON(jsonString: string): void{
    this.businessRange = [];
    this.economyRange = [];

    // parse the JSON string
    const parsedData = JSON.parse(jsonString);

    // sort the JSON string
    parsedData.sort(function(a, b) {
      return b - a;
    });

    // move the sorted JSON string to appropriate arrays
    parsedData.forEach(customer => {
      if(customer >= 100 ){
        this.businessRange.push(customer);
      } else if (customer < 100){
        this.economyRange.push(customer);
      }
    });
  }

  private calculateResultValue(result: Result): Result{
    result.businessRoomsUsage.forEach(value => {
      result.businessRoomsValue += value;
    });

    result.economyRoomsUsage.forEach(value => {
      result.economyRoomsValue += value;
    });

    return result;
  }
}
