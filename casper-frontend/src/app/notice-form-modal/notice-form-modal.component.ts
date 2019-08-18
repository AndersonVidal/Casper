import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NoticeAPIService } from '../services/notice-api.service';

@Component({
  selector: 'app-notice-form-modal',
  templateUrl: './notice-form-modal.component.html',
  styleUrls: ['./notice-form-modal.component.scss']
})
export class NoticeFormModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NoticeFormModalComponent>,
    private _api: NoticeAPIService,
    private formBuilder: FormBuilder
  ) { }
  
  noticeForm: FormGroup;
  isLoadingResults = false;

  ngOnInit() {
    this.noticeForm = this.formBuilder.group({
      'title'       : [null, Validators.required],
      'topic'       : [null, Validators.required],
      'description' : [null, Validators.required],
      'notice_url'  : [null, Validators.required],
      'image_url'   : [null, Validators.required]
    })
  }

  close(): void {
    this.dialogRef.close(); 
  }

  save(form: NgForm) {
    this.isLoadingResults = true;
    this._api.addNotice(form).subscribe(res => {
      const id = res['_id'];
      this.isLoadingResults = false;
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
