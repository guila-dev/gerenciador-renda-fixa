import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { RendaFixa } from '../models/renda-fixa.types';

@Injectable({
  providedIn: 'root'
})
export class RendaFixaService {
  private httpClient = inject(HttpClient);
  private rendaFixaUrl = `${environment.andbankApi}/renda-fixa`

  getAllRendaFixa(): Observable<RendaFixa[]>{
    return this.httpClient.get<RendaFixa[]>(this.rendaFixaUrl);
  }

}
