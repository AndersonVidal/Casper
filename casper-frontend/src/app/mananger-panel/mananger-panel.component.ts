import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NoticeFormModalComponent } from '../notice-form-modal/notice-form-modal.component';

@Component({
  selector: 'app-mananger-panel',
  templateUrl: './mananger-panel.component.html',
  styleUrls: ['./mananger-panel.component.scss']
})
export class ManangerPanelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100vh';
    
    this.dialog.open(NoticeFormModalComponent, dialogConfig);
  }
}
