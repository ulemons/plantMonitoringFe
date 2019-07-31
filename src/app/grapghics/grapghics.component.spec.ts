import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapghicsComponent } from './grapghics.component';

describe('GrapghicsComponent', () => {
  let component: GrapghicsComponent;
  let fixture: ComponentFixture<GrapghicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapghicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapghicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
