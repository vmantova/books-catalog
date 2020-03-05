import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm;

  constructor(private bookService: BookService,
              private formBuilder: FormBuilder) 
  {

    this.bookForm = this.formBuilder
    .group({
      title: '',
      author: '',
      dateAdded: '',
    });
   }

  ngOnInit(): void {
  }

  onSubmit(data): any{

     //send data to server;
     this.bookService.sendBook(data).subscribe();
    this.bookForm.reset()
  }

}
