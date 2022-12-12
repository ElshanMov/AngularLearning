import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  private url(requestParametrs: Partial<RequestParametrs>): string {
    return `${
      requestParametrs.baseUrl ? requestParametrs.baseUrl : this.baseUrl
    }/${requestParametrs.controller}${
      requestParametrs.action ? `/${requestParametrs.action}` : ''
    }`;
  }
  get<T>(
    requestParametrs: Partial<RequestParametrs>,
    id?: string
  ): Observable<T> {
    let url = '';
    if (requestParametrs.fullEndPoint) url = requestParametrs.fullEndPoint;
    else
      url = `${this.url(requestParametrs)}${id ? `/${id}` : ''}${
        requestParametrs.queryString ? `?${requestParametrs.queryString}` : ''
      }`;
    return this.httpClient.get<T>(url);
  }

  post<T>(
    requestParametrs: Partial<RequestParametrs>,
    body: Partial<T>
  ): Observable<T> {
    let url = '';
    if (requestParametrs.fullEndPoint) url = requestParametrs.fullEndPoint;
    else url = this.url(requestParametrs);
    return this.httpClient.post<T>(url, body, {
      headers: requestParametrs.headers,
    });
  }

  update<T>(
    requestParametrs: Partial<RequestParametrs>,
    body: Partial<T>
  ): Observable<T> {
    let url = '';
    if (requestParametrs.fullEndPoint) url = requestParametrs.fullEndPoint;
    else url = this.url(requestParametrs);
    return this.httpClient.put<T>(url, body, {
      headers: requestParametrs.headers,
    });
  }
  remove<T>(
    requestParametrs: Partial<RequestParametrs>,
    id: string
  ): Observable<T> {
    let url = '';
    if (requestParametrs.fullEndPoint) url = requestParametrs.fullEndPoint;
    else url = `${this.url(requestParametrs)}/${id}`;
    return this.httpClient.delete<T>(url, {
      headers: requestParametrs.headers,
    });
  }
}
export class RequestParametrs {
  controller?: string;
  action?: string;
  queryString?: string;

  headers?: HttpHeaders;
  fullEndPoint?: string;
  baseUrl?: string;
}
