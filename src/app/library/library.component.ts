import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private books: LoginService) {}

  ngOnInit(): void {
    this.books.getBooks().subscribe((data) => {
      console.log(data);
    });
  }
}
