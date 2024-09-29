import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaFixaDeleteDialogComponent } from './renda-fixa-delete-dialog.component';

describe('RendaFixaDeleteDialogComponent', () => {
  let component: RendaFixaDeleteDialogComponent;
  let fixture: ComponentFixture<RendaFixaDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaFixaDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaFixaDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
