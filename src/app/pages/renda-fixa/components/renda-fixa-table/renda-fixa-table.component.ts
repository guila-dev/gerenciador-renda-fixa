import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTable, MatTableModule} from '@angular/material/table';
import { RendaFixa } from '../../models/renda-fixa.types';
import { MatIconModule } from '@angular/material/icon';
import rendaFixaListaMock from '../../../../mock/renda-fixa.mock';
import { DatePipe } from '@angular/common';
import { RendaFixaService } from '../../services/renda-fixa.service';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-renda-fixa-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, DatePipe],
  templateUrl: './renda-fixa-table.component.html',
  styleUrl: './renda-fixa-table.component.scss'
})
export class RendaFixaTableComponent {
  displayedColumns: string[] = ['id', 'descricao', 'dataValidade', 'investimentoMinimo', 'tipoProduto', 'indexador', 'acoes'];
  dataSource = [];
  allRendaFixaData = []
  pageIndex = 0;
  pageSize = 10;
  rendaFixaService = inject(RendaFixaService);

  @ViewChild(MatTable) table: MatTable<RendaFixa>;

  constructor(){
    this.rendaFixaService.getAllRendaFixa().subscribe(
      data =>{
        this.allRendaFixaData = data;
        this.dataSource = [...data.slice(this.pageIndex, this.pageSize)];
      }
    );
  }

  nextPage(){
    this.pageIndex++;
    this.changePage();
  }

  prevPage(){
    if(!this.pageIndex) return;
    this.pageIndex--;
    this.changePage();
  }

  changePage(){
    const startPage =  this.pageIndex*this.pageSize;
    const endPage = startPage+this.pageSize;
    this.dataSource = [
      ...this.allRendaFixaData.slice(startPage, endPage)];
  }

  removerRendaFixa(rendaFixaId: number) {
    this.dataSource.pop();
    this.table.renderRows();
  }

  editarRendaFixa(rendaFixaId: number) {
  }
}
