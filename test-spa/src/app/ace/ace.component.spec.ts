import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceComponent } from './ace.component';

describe('AceComponent', () => {
  let component: AceComponent;
  let fixture: ComponentFixture<AceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
