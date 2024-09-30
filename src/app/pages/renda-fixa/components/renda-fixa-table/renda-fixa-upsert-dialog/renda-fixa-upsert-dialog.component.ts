import { Component, inject, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime, distinctUntilChanged, EMPTY, Observable, switchMap } from 'rxjs';
import { Indexador } from '../../../models/renda-fixa.types';
import { RendaFixaFilterService } from '../../../services/renda-fixa-filter.service';
import { AsyncPipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-renda-fixa-upsert-dialog',
  standalone: true,
  imports: [ MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    AsyncPipe,
    MatDatepickerModule
  ],
  templateUrl: './renda-fixa-upsert-dialog.component.html',
  styleUrl: './renda-fixa-upsert-dialog.component.scss'
})
export class RendaFixaUpsertDialogComponent {
  rendaFixaForm: FormGroup;
  private fb = inject(FormBuilder);

  filterService = inject(RendaFixaFilterService);
  tiposProduto$ = this.filterService.getTiposProduto();
  indexadores$: Observable<any> = new Observable<Indexador[]>();
  indexadores;


  constructor(
    public dialogRef: MatDialogRef<RendaFixaUpsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.rendaFixaForm = this.fb.group({
      id: [data?.id || ''],
      descricao: [data?.descricao || '', Validators.required],
      dataValidade: [data?.dataValidade || '', Validators.required],
      investimentoMinimo: [data?.investimentoMinimo || 0, [Validators.required, Validators.min(0)]],
      tipoProdutoId: [data?.tipoProdutoId || null, Validators.required],
      indexadorId: [{value: data?.indexadorId || null, disabled: true}, Validators.required]
    });
    this.getIndexadores();
    if(data?.tipoProdutoId){
      this.rendaFixaForm.controls['tipoProdutoId'].setValue(data.tipoProdutoId);
    }
  }

  getIndexadores(): void{
    this.indexadores$ = this.rendaFixaForm.controls['tipoProdutoId']
     .valueChanges
     .pipe(
       debounceTime(300),
       distinctUntilChanged(),
       switchMap<number, Observable<Indexador[]>>((tipoProdutoId: number) =>{
          if(!tipoProdutoId){
           this.rendaFixaForm.controls['indexadorId'].disable()
           return EMPTY
         }
         this.rendaFixaForm.controls['indexadorId'].enable();
          return this.filterService.getIndexadores(tipoProdutoId);
       })
     )
     this.indexadores$.subscribe( result =>{
      this.indexadores = result;
     })
 }

  onSave(): void {
    if (this.rendaFixaForm.valid) {
      this.dialogRef.close({ value: this.rendaFixaForm.value});
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
