import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedHistoryComponent } from './blocked-history.component';

describe('BlockedHistoryComponent', () => {
  let component: BlockedHistoryComponent;
  let fixture: ComponentFixture<BlockedHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
