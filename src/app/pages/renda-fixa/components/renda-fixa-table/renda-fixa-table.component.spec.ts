import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaFixaTableComponent } from './renda-fixa-table.component';

describe('RendaFixaTableComponent', () => {
  let component: RendaFixaTableComponent;
  let fixture: ComponentFixture<RendaFixaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaFixaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaFixaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
