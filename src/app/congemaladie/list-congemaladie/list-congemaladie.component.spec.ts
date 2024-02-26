import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCongemaladieComponent } from './list-congemaladie.component';

describe('ListCongemaladieComponent', () => {
  let component: ListCongemaladieComponent;
  let fixture: ComponentFixture<ListCongemaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCongemaladieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCongemaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
