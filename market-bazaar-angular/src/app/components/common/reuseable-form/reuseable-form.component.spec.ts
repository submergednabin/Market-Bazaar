import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableFormComponent } from './reuseable-form.component';

describe('ReuseableFormComponent', () => {
  let component: ReuseableFormComponent;
  let fixture: ComponentFixture<ReuseableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
