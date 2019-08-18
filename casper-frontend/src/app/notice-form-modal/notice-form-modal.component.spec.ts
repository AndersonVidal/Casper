import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeFormModalComponent } from './notice-form-modal.component';

describe('NoticeFormModalComponent', () => {
  let component: NoticeFormModalComponent;
  let fixture: ComponentFixture<NoticeFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
