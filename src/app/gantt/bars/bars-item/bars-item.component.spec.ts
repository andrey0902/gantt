import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsItemComponent } from './bars-item.component';

describe('BarsItemComponent', () => {
  let component: BarsItemComponent;
  let fixture: ComponentFixture<BarsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
