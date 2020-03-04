import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operator';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl: string = 'https://localhost:5001/api/books'

  constructor(private http: HttpClient) { }

  getAllBooks() : Observable<any>{
    return this.http.get(this.apiUrl)
  }
  

  sendBook(book) : Observable<any>{

    const httpOptions = {
      headers:  new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    console.log('post init')
    console.log (book)
    return this.http
    .post(this.apiUrl,book,httpOptions)
  }

  private handleError(error: HttpErrorResponse){
    if(error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message)
    }else{
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    }
  }
}
