import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCongeComponent } from './create-conge.component';

describe('CreateCongeComponent', () => {
  let component: CreateCongeComponent;
  let fixture: ComponentFixture<CreateCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
