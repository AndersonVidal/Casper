import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { Notice } from '../models/notice';
import { NoticeAPIService } from '../services/notice-api.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-notice-table',
  templateUrl: './notice-table.component.html',
  styleUrls: ['./notice-table.component.scss']
})
export class NoticeTableComponent implements OnInit, OnChanges {

  constructor(private _api: NoticeAPIService) { }

  displayedColumns: string[] = ['title', 'topic', 'description', 'notice_url', 'image_url', 'actions'];
  dataSource;
  isLoadingResults;
  @Input() newData;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this._api.getNotices().subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
      for (let index = 0; index < this.dataSource.length; index++) {
        this.dataSource[index].filteredData.id = index + 1;
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  ngOnChanges(newData) {
    this.ngOnInit();
  }

  remove(id) {
    this._api.deleteNotice(id).subscribe(res => {
      console.log("Notice id=" + id + " has been deleted");
      this.ngOnInit();
    });
  }
}
