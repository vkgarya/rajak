import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryTwoComponent } from './try-two.component';

describe('TryTwoComponent', () => {
  let component: TryTwoComponent;
  let fixture: ComponentFixture<TryTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
