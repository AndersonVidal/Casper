import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Título: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-notice-table',
  templateUrl: './notice-table.component.html',
  styleUrls: ['./notice-table.component.scss']
})
export class NoticeTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
