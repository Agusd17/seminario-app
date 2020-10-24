import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanadasListComponent } from './empanadas-list.component';

describe('EmpanadasListComponent', () => {
  let component: EmpanadasListComponent;
  let fixture: ComponentFixture<EmpanadasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpanadasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpanadasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
