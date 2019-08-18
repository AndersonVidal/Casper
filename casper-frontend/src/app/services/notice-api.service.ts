import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Notice } from '../models/notice';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeAPIService {

  constructor(private http: HttpClient) { }

  getNotices(): Observable<Notice[]> {
    return this.http.get<Notice[]>(apiUrl)
      .pipe(
        tap(notices => console.table(notices)),
        catchError(this.handleError('getNotices', []))
      );
  }

  getNotice(id: Number): Observable<Notice> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Notice>(url)
      .pipe(
        tap(_ => console.log(`Noticia id=${id} coletada`)),
        catchError(this.handleError<Notice>(`getNotice id=${id}`))
      );
  }

  addNotice(notice): Observable<Notice> {
    return this.http.post<Notice>(apiUrl, notice, httpOptions)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        tap((notice: Notice) => console.log(`Noticia id=${notice._id}`)),
        catchError(this.handleError<Notice>('addNotice'))
      );
  }

  updateNotice(id, notice): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, notice, httpOptions)
      .pipe(
        tap(_ => console.log(`Noticia id=${id} atualizada`)),
        catchError(this.handleError<any>('updateNotice'))
      );
  }

  deleteNotice(id): Observable<Notice> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Notice>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`Noticia id=${id} removida`)),
        catchError(this.handleError<Notice>('deleteNotice'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
