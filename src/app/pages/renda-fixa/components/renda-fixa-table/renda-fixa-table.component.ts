import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RendaFixa, RendaFixaFilter } from '../../models/renda-fixa.types';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { RendaFixaService } from '../../services/renda-fixa.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { RendaFixaFilterService } from '../../services/renda-fixa-filter.service';
import { RendaFixaDeleteDialogComponent } from './renda-fixa-delete-dialog/renda-fixa-delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RendaFixaUpsertDialogComponent } from './renda-fixa-upsert-dialog/renda-fixa-upsert-dialog.component';


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
  private filterService = inject(RendaFixaFilterService);
  private dialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<RendaFixa>;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit(): void {
    this.filterService.filter$.subscribe(changes =>{
      this.rendaFixaService.getAllRendaFixa(changes).subscribe(
        data =>{
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataSource.data = data;
        }
      );
    })
  }

  removerRendaFixa(rendaFixaId: number) {
    const dialogRef = this.dialog.open(RendaFixaDeleteDialogComponent, {
      height: '200px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(
      answer =>{
        if(answer){
          this.rendaFixaService.deleteRendaFixa(rendaFixaId).subscribe(
            () =>{
              this.filterService.notifyAll();
            }
          );
        }
      }
    )
  }

  editarRendaFixa(rendaFixa: RendaFixa) {
    const dialogRef = this.dialog.open(RendaFixaUpsertDialogComponent, {
      height: '550px',
      width: '400px',
      data: rendaFixa
    });
    dialogRef.afterClosed().subscribe(
      (answer) =>{
          if(answer?.value){
            this.rendaFixaService.updateRendaFixa(answer?.value).subscribe(
              ()=>{
                this.filterService.notifyAll();
              }
            )
          }
      }
    )
  }

  
  createRendaFixa() {
    const dialogRef = this.dialog.open(RendaFixaUpsertDialogComponent, {
      height: '550px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(
      (answer) =>{
          if(answer?.value){
            this.rendaFixaService.createRendaFixa(answer?.value).subscribe(
              ()=>{
                this.filterService.notifyAll();
              }
            )
          }
      }
    )
  }

}
