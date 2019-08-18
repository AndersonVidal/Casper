import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManangerPanelComponent } from './mananger-panel/mananger-panel.component';
import { NoticeTableComponent } from './notice-table/notice-table.component';
import { MaterialModule } from './material.module';
import { NoticeFormModalComponent } from './notice-form-modal/notice-form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    ManangerPanelComponent,
    NoticeTableComponent,
    NoticeFormModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    NoticeFormModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
