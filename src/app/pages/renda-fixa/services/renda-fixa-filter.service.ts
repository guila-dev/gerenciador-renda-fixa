import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, share, shareReplay } from 'rxjs';
import { Indexador, RendaFixaFilter, TipoProduto } from '../models/renda-fixa.types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RendaFixaFilterService {

  private readonly httpClient = inject(HttpClient)
  private readonly filter = new BehaviorSubject<RendaFixaFilter>({});
  filter$: Observable<RendaFixaFilter> = this.filter.asObservable();
  indexadorUrl = `${environment.andbankApi}/indexadores`
  tiposProdutoUrl = `${environment.andbankApi}/tipo-produto`
  setFilter(newFilter: RendaFixaFilter){
    this.filter.next(newFilter);
  }

  notifyAll(){
    this.setFilter(this.filter.value)
  }

  getIndexadores(tipoProdutoId: number): Observable<Indexador[]>{
    return this.httpClient.get<Indexador[]>(`${this.indexadorUrl}/${tipoProdutoId}`)
    .pipe(
      debounceTime(200),
      distinctUntilChanged((prev, curr) => prev === curr)
    )
  }

  getTiposProduto(): Observable<TipoProduto[]>{
    return this.httpClient.get<TipoProduto[]>(`${this.tiposProdutoUrl}`);

  }


}
