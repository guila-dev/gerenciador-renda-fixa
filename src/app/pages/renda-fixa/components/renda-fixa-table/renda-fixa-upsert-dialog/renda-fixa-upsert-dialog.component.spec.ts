import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaFixaUpsertDialogComponent } from './renda-fixa-upsert-dialog.component';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

fdescribe('RendaFixaUpsertDialogComponent', () => {
  let component: RendaFixaUpsertDialogComponent;
  let fixture: ComponentFixture<RendaFixaUpsertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        RendaFixaUpsertDialogComponent,
        MatDialogModule],
        providers:[{
            provide: MatDialogRef,
            useValue: {}
        }]
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
