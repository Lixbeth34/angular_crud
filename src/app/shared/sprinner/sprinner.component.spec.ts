import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprinnerComponent } from './sprinner.component';

describe('SprinnerComponent', () => {
  let component: SprinnerComponent;
  let fixture: ComponentFixture<SprinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
