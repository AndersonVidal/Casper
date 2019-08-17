import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangerPanelComponent } from './mananger-panel.component';

describe('ManangerPanelComponent', () => {
  let component: ManangerPanelComponent;
  let fixture: ComponentFixture<ManangerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManangerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManangerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
