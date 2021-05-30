import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryThreeComponent } from './try-three.component';

describe('TryThreeComponent', () => {
  let component: TryThreeComponent;
  let fixture: ComponentFixture<TryThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
