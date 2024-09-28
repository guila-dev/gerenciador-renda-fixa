import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RendaFixa } from '../../models/renda-fixa.types';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { RendaFixaService } from '../../services/renda-fixa.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-renda-fixa-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, DatePipe, MatPaginatorModule, MatSortModule],
  templateUrl: './renda-fixa-table.component.html',
  styleUrl: './renda-fixa-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RendaFixaTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'descricao', 'dataValidade', 'investimentoMinimo', 'tipoProduto', 'indexador', 'acoes'];
  dataSource = new MatTableDataSource<RendaFixa>();
  private rendaFixaService = inject(RendaFixaService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<RendaFixa>;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit(): void {
    this.rendaFixaService.getAllRendaFixa().subscribe(
      data =>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.data = data;
      }
    );
  }


  removerRendaFixa(rendaFixaId: number) {
  }

  editarRendaFixa(rendaFixaId: number) {
  }
}
