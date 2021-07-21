import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudeItemComponent } from './etude-item.component';

describe('EtudeItemComponent', () => {
  let component: EtudeItemComponent;
  let fixture: ComponentFixture<EtudeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
