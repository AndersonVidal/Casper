import { Component, OnInit } from '@angular/core';
import { Notice } from '../models/notice';
import { NoticeAPIService } from '../services/notice-api.service'

@Component({
  selector: 'app-notice-table',
  templateUrl: './notice-table.component.html',
  styleUrls: ['./notice-table.component.scss']
})
export class NoticeTableComponent implements OnInit {

  constructor(private _api: NoticeAPIService) { }

  displayedColumns: string[] = ['_id', 'title', 'topic', 'description', 'notice_url', 'image_url', 'actions'];
  dataSource: Notice[];
  isLoadingResults;

  ngOnInit() {
    this._api.getNotices().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
