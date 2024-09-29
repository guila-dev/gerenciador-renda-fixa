import { Component, inject, OnInit } from '@angular/core';
import { Indexador } from '../../models/renda-fixa.types';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RendaFixaFilterService } from '../../services/renda-fixa-filter.service';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-renda-fixa-filter',
  standalone: true,
  imports: [ MatFormFieldModule,MatInputModule,
    MatSelectModule, MatButtonModule,
    ReactiveFormsModule, MatIconModule, AsyncPipe],
  templateUrl: './renda-fixa-filter.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ marginLeft: '-100%' }),
        animate('200ms', style({ marginLeft: '0px' })),
      ]),
      transition(':leave', [animate('200ms', style({ marginLeft: '-100%' }))]),
    ]),
  ],
  styleUrl: './renda-fixa-filter.component.scss'
})
export class RendaFixaFilterComponent implements OnInit {
 
  filterForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  filterService = inject(RendaFixaFilterService);
  openFilter = false;
  tiposProduto$ = this.filterService.getTiposProduto();
  indexadores$: Observable<any> = new Observable<Indexador[]>();

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      id: [null],
      descricao: [''],
      tipoProdutoId: [null],
      indexadorId: {value: null, disabled: true}
    });

    this.filterForm.valueChanges
    .pipe(debounceTime(300))
    .subscribe(filterChange =>{
      console.log(filterChange);
      this.filterService.setFilter(filterChange);

    })
    this.getIndexadores$();
  }

  getIndexadores$(): void{
     this.indexadores$ = this.filterForm.controls['tipoProdutoId']
      .valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap<number, Observable<Indexador[]>>((tipoProdutoId: number) =>{
          this.filterForm.controls['indexadorId'].setValue('');
          if(!tipoProdutoId){
            this.filterForm.controls['indexadorId'].disable()
            return EMPTY
          }
          this.filterForm.controls['indexadorId'].enable()
           return this.filterService.getIndexadores(tipoProdutoId);
        })
      )
      this.indexadores$.subscribe()
  }

  toggleFilter() {
    this.openFilter = !this.openFilter;
  }
  clearFilter(){
    this.filterForm.reset();
  }
}
