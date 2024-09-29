import { Component, inject, OnInit } from '@angular/core';
import { Indexador, TipoProduto } from '../../models/renda-fixa.types';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RendaFixaFilterService } from '../../services/renda-fixa-filter.service';
import { delay } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-renda-fixa-filter',
  standalone: true,
  imports: [ MatFormFieldModule,MatInputModule,
    MatSelectModule, MatButtonModule,
    ReactiveFormsModule, MatIconModule],
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

  tiposProduto: TipoProduto[] = [
    { id: 1, nome: 'CDB' },
    { id: 2, nome: 'Debênture' },
    { id: 3, nome: 'Tesouro direto' }
  ];

  indexadores: Indexador[] = [
    { id: 1, nome: 'CDI' },
    { id: 2, nome: 'SELIC' },
    { id: 3, nome: 'IPCA +' }
  ];

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      id: [null],
      descricao: [''],
      tipoProdutoId: [null],
      indexadorId: [null]
    });

    this.filterForm.valueChanges
    .pipe(delay(200))
    .subscribe(filterChange =>{
      console.log(filterChange);
      this.filterService.setFilter(filterChange);

    })
  }
  toggleFilter() {
    this.openFilter = !this.openFilter;
  }
  clearFilter(){
    this.filterForm.reset();
  }
}
