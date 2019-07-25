import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServiceError} from './service-error';
import {Agency} from '../models/agency';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  saveAgency(agency: Agency): Observable<void> {

    let url = `${this.baseUrl}agencies`;


    // const httpOptions = {headers: new HttpHeaders().set('Accept', 'application/json')};

    return this.http.post<any>(url, agency)
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

  deleteAgency(agency: Agency): Observable<void> {

    let url = `${this.baseUrl}agencies`;

    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      body: agency
    };

    return this.http.delete<any>(url, httpOptions)
      .pipe(map(response => {
          if (response) {
            return response;
          }
        }),
        catchError(
          err => {
            switch (err.key) {
              case 400: {
                return throwError(new ServiceError('error-400', 'Ocurrio un error al intentar consultar la api.'));
              }
              case 500: {
                return throwError(new ServiceError('error-500', 'Ocurrió un error en el servidor'));
              }
              default: {
                return throwError(new ServiceError('error-api-generico', 'Ocurrió un error'));
              }
            }
          }
        ));
  }

}
