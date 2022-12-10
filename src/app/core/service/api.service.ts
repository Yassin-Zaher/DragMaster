import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }


  public get<T>(url: string, item?: string | null, params?: HttpParams): Observable<T> {
    if (item) {
      url += `/${item}`;
    }
    return this.httpClient.get<T>(url, {params: params});
  }

  public post<T>(url: string, item: any): Observable<T> {
    return this.httpClient.post<T>(url, item);
  }

  public put<T>(url: string, item: T): Observable<T> {
    return this.httpClient.put<T>(url, item);
  }

  public delete<T>(url: string, itemId: string): Observable<T> {
    url += `/${itemId}`;
    return this.httpClient.delete<T>(url);
  }

  public getHttpClient(): HttpClient {
    return this.httpClient;
  }
}
