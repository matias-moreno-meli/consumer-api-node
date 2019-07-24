import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SearchResult} from '../models/search-result';
import {ServiceError} from './service-error';
import {CategoryRepository} from '../repository/category.repository';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getItems(siteId: string,
           paymentMethodId: string,
           lat: string,
           lon: string,
           radius: string,
           limit: string,
           offset: string,
           type: string,
           order: string): Observable<SearchResult> {

    let url = `${this.baseUrl}sites/${siteId}/payment_methods/${paymentMethodId}/agencies?near_to=${lat},${lon},${radius}`;

    if (limit) {
      url += `&limit=${limit}`;
    }
    if (offset) {
      url += `&offset=${offset}`;
    }
    if (type && order) {
      url += `&order_by=${type},${order}`;
    }
    // const httpOptions = {headers: new HttpHeaders().set('Accept', 'application/json')};

    return this.http.get<any>(url)
      .pipe(map(response => {
          if (response) {
            return response;
          }
        }),
        catchError(
          err => {
            switch (err.key) {
              case 400: {
                return throwError(new ServiceError('examen-tecnico-api-400', 'Ocurrio un error al intentar consultar la api.'));
              }
              case 500: {
                return throwError(new ServiceError('examen-tecnico-api-500', 'Ocurrió un error en el servidor'));
              }
              default: {
                return throwError(new ServiceError('examen-tecnico-api-generico', 'Ocurrió un error'));
              }
            }
          }
        ));
  }

  /* getItemWithDescription(id: string): Observable<Item> {

     const url = `${this.baseUrl}/items/${id}`;
     const httpOptions = {headers: new HttpHeaders().set('Accept', 'application/json')};

     return this.http.get<ItemWithDescriptionMeliResponseDto>(url, httpOptions)
       .pipe(map(response => {
           return ItemWithDescriptionMeliResponseDto.convertToDomain(response);
         }),
         catchError(
           err => {
             switch (err.key) {
               case 400: {
                 return throwError(new ServiceError('examen-tecnico-api-400', 'Ocurrio un error al intentar consultar la api.'));
               }
               case 500: {
                 return throwError(new ServiceError('examen-tecnico-api-500', 'Ocurrió un error en el servidor'));
               }
               default: {
                 return throwError(new ServiceError('examen-tecnico-api-generico', 'Ocurrió un error'));
               }
             }
           }
         ));
   }*/
}
