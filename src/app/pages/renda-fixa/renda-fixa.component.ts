import { Component } from '@angular/core';
import { RendaFixaTableComponent } from './components/renda-fixa-table/renda-fixa-table.component';
import { RendaFixaFilterComponent } from './components/renda-fixa-filter/renda-fixa-filter.component';

@Component({
  selector: 'app-renda-fixa',
  standalone: true,
  imports: [RendaFixaTableComponent, RendaFixaFilterComponent],
  templateUrl: './renda-fixa.component.html',
  styleUrl: './renda-fixa.component.scss'
})
export class RendaFixaComponent {

}
