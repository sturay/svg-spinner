import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurroundComponent } from './surround.component';

describe('SurroundComponent', () => {
  let component: SurroundComponent;
  let fixture: ComponentFixture<SurroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
