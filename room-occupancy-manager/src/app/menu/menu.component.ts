import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  formGroup: FormGroup;

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

  constructor() { }

  ngOnInit(): void {
  }

}
