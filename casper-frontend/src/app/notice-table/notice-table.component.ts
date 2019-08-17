import { Component, OnInit } from '@angular/core';

export interface Notice {
  id: number;
  title: string;
  topic: string;
  description: string;
  notice_url: string;
  image_url: string;
}

const NOTICE_DATA: Notice[] = [
  {
    id: 1, 
    title: 'Hydrogen', 
    topic: 'Periodic Elem', 
    description: 'Elem and periodic',
    notice_url: 'linklink', 
    image_url: 'linklink'
  },
  {
    id: 2, 
    title: 'Helium', 
    topic: 'Periodic Elem', 
    description: 'Elem and periodic',
    notice_url: 'linklink', 
    image_url: 'linklink'
  },
  {
    id: 3, 
    title: 'Lithium', 
    topic: 'Periodic Elem', 
    description: 'Elem and periodic',
    notice_url: 'linklink', 
    image_url: 'linklink'
  },
];

@Component({
  selector: 'app-notice-table',
  templateUrl: './notice-table.component.html',
  styleUrls: ['./notice-table.component.scss']
})
export class NoticeTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['id', 'title', 'topic', 'description', 'notice_url', 'image_url'];
  dataSource = NOTICE_DATA;
}
