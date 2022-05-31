import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private _token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjA4OWNjNmYyNmQxMzYwM2JjM2M3YzZhMDczMDY5ZSIsInN1YiI6IjYyOTVmMGNjMDllZDhmMTI1NDdlMTdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.70Qsxfz28msTpG_STwekTsHOeXtxTQw8ZQROIGa1aY0'

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request, this._token)

    return next.handle(request);

  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }
}
