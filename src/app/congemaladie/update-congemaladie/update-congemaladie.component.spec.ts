import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCongemaladieComponent } from './update-congemaladie.component';

describe('UpdateCongemaladieComponent', () => {
  let component: UpdateCongemaladieComponent;
  let fixture: ComponentFixture<UpdateCongemaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCongemaladieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCongemaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
