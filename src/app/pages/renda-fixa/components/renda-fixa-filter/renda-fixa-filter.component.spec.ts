import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaFixaFilterComponent } from './renda-fixa-filter.component';

describe('RendaFixaFilterComponent', () => {
  let component: RendaFixaFilterComponent;
  let fixture: ComponentFixture<RendaFixaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaFixaFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaFixaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
