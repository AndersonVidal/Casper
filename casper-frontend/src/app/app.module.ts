import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManangerPanelComponent } from './mananger-panel/mananger-panel.component';
import { NoticeTableComponent } from './notice-table/notice-table.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ManangerPanelComponent,
    NoticeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
