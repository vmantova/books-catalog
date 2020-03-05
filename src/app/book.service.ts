import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book-list/Book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl: string = 'https://localhost:5001/api/books'

  constructor(private http: HttpClient) { }

  getAllBooks() : Observable<Book[]>{
    const httpOptions = {
      headers:  new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Book[]>(this.apiUrl,httpOptions)
  }
  

  sendBook(book: Book) : Observable<any>{

    const httpOptions = {
      headers:  new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    console.log('post init')
    console.log (book)
    return this.http.post<Book>(this.apiUrl,book,httpOptions)
  }
}
