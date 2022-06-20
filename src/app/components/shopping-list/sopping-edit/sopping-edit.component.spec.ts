import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoppingEditComponent } from './sopping-edit.component';

describe('SoppingEditComponent', () => {
  let component: SoppingEditComponent;
  let fixture: ComponentFixture<SoppingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoppingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
