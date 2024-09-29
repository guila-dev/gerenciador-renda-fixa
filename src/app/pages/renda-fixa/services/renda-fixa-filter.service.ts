import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RendaFixaFilter } from '../models/renda-fixa.types';

@Injectable({
  providedIn: 'root'
})
export class RendaFixaFilterService {

  private readonly filter = new BehaviorSubject<RendaFixaFilter>({});
  filter$: Observable<RendaFixaFilter> = this.filter.asObservable();
  
  setFilter(newFilter: RendaFixaFilter){
    this.filter.next(newFilter);
  }
}
