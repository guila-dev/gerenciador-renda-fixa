import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { RendaFixa, RendaFixaFilter } from '../models/renda-fixa.types';

@Injectable({
  providedIn: 'root'
})
export class RendaFixaService {
  private httpClient = inject(HttpClient);
  private rendaFixaUrl = `${environment.andbankApi}/renda-fixa`


  getAllRendaFixa(filter?: RendaFixaFilter): Observable<RendaFixa[]>{
    const params: HttpParams = this.loadFilter(filter);
    return this.httpClient.get<RendaFixa[]>(this.rendaFixaUrl, {params});
  }


  loadFilter(filters: RendaFixaFilter): HttpParams {
    let params = new HttpParams();
    Object.entries(filters).forEach((filter)=>{
      const [key, value] = filter;
      if(value){
        params = params.set(key, value);
      }
    })
    return params;
  }
}


