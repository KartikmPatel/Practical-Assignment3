import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  integerData: number = 46;
  stringData: string = 'Kartik Patel';
  dateData: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
}
