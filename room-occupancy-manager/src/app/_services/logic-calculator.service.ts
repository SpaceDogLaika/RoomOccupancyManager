import { Injectable } from '@angular/core';
import { HotelRooms } from '../_models/hotel-rooms';
import { Result } from '../_models/result.enum';

@Injectable({
  providedIn: 'root'
})
export class LogicCalculatorService {

  testData: string = "[23,45,155,374,22,99,100,101,115,209]";
  businessRange: number[] = [];
  economyRange: number[] = [];

  constructor() { 
    this.businessRange = [];
    this.economyRange = [];
  }

  public calculateRoomDelegation(hotelRooms: HotelRooms){

    let result: Result = {
      businessRoomsAvailable: 0,
      businessRoomsUsage: [],
      businessRoomsValue: 0,
      economyRoomsAvailable: 0,
      economyRoomsUsage: [],
      economyRoomsValue: 0
    };

    // set the available rooms
    result.businessRoomsAvailable = hotelRooms.businessRooms;
    result.economyRoomsAvailable = hotelRooms.economyRooms;

    this.parseAndSortJSON(this.testData);

    for (let index = 0; index < hotelRooms.businessRooms; index++) {
      if (this.businessRange[index]){
        result.businessRoomsUsage.push(this.businessRange[index]);
      }
    }

    for (let index = 0; index < hotelRooms.economyRooms; index++) {
      if (this.economyRange[index]){
        result.economyRoomsUsage.push(this.economyRange[index]);
      }
    }

    result = this.calculateResult(result);

    console.log(result);
  }

  private parseAndSortJSON(jsonString: string): void{
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

  private calculateResult(result: Result): Result{
    result.businessRoomsUsage.forEach(value => {
      result.businessRoomsValue += value;
    });

    result.economyRoomsUsage.forEach(value => {
      result.economyRoomsValue += value;
    });

    return result;
  }
}
