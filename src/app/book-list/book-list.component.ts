import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }
  

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getAllBooks().subscribe(response => {
      this.books = response
    });
  }
}
