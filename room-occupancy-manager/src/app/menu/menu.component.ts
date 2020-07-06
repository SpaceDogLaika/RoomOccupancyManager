import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  formGroup: FormGroup;

  roomForm = new FormGroup({
    businessRooms: new FormControl('', [Validators.required]),
    economyRooms: new FormControl('', [Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
