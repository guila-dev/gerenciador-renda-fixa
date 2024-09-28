import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes(environment.andbankApi)){
    const reqWithTestKey = req.clone({
      headers: req.headers.set('X-Test-Key', environment.andbankKey),
    });
    return next(reqWithTestKey);
  }
  return next(req);
};
