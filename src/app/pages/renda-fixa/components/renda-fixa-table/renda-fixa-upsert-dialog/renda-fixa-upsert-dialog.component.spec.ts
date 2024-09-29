import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaFixaUpsertDialogComponent } from './renda-fixa-upsert-dialog.component';

describe('RendaFixaUpsertDialogComponent', () => {
  let component: RendaFixaUpsertDialogComponent;
  let fixture: ComponentFixture<RendaFixaUpsertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaFixaUpsertDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaFixaUpsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
