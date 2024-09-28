import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTable, MatTableModule} from '@angular/material/table';
import { RendaFixa } from '../../models/renda-fixa.types';
import { MatIconModule } from '@angular/material/icon';
import rendaFixaListaMock from '../../../../mock/renda-fixa.mock';
import { DatePipe } from '@angular/common';

const rendaFixaLista = rendaFixaListaMock

@Component({
  selector: 'app-renda-fixa-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, DatePipe],
  templateUrl: './renda-fixa-table.component.html',
  styleUrl: './renda-fixa-table.component.scss'
})
export class RendaFixaTableComponent {
  displayedColumns: string[] = ['id', 'descricao', 'dataValidade', 'investimentoMinimo', 'tipoProduto', 'indexador', 'acoes'];
  dataSource = [...rendaFixaLista];

  @ViewChild(MatTable) table: MatTable<RendaFixa>;

  removerRendaFixa(rendaFixaId: number) {
    this.dataSource.pop();
    this.table.renderRows();
  }

  editarRendaFixa(rendaFixaId: number) {
  }
}
