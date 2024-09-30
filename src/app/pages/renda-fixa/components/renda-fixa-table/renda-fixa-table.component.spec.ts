import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaFixaTableComponent } from './renda-fixa-table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('RendaFixaTableComponent', () => {
  let component: RendaFixaTableComponent;
  let fixture: ComponentFixture<RendaFixaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
      CommonModule,
      NoopAnimationsModule,
      RendaFixaTableComponent],
    providers: [ 
      provideHttpClient(),
      provideHttpClientTesting() ]
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

