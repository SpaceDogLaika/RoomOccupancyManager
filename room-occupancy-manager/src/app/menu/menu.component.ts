import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LogicCalculatorService } from '../_services/logic-calculator.service';
import { HotelRooms } from '../_models/hotel-rooms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  formGroup: FormGroup;
  failed: boolean = false;

  get businessRooms() {
		return this.roomForm.get('businessRooms') as FormControl;
  }

  get economyRooms() {
		return this.roomForm.get('economyRooms') as FormControl;
  }

  roomForm = new FormGroup({
    businessRooms: new FormControl('', [Validators.required]),
    economyRooms: new FormControl('', [Validators.required]),
  })

  constructor(private logicCalculator: LogicCalculatorService) { }

  ngOnInit(): void {
  }

  submit(){
      if(!this.businessRooms.hasError('required') && !this.economyRooms.hasError('required')){
        this.failed = false;
        this.logicCalculator.calculateRoomDelegation(this.roomForm.value as HotelRooms);
      } else {
        this.failed = true;
      }
    }
}
