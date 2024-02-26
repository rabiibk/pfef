import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCongemaladieComponent } from './create-congemaladie.component';

describe('CreateCongemaladieComponent', () => {
  let component: CreateCongemaladieComponent;
  let fixture: ComponentFixture<CreateCongemaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCongemaladieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCongemaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
