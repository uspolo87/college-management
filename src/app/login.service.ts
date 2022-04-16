import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public http: HttpClient) {}

  getBooks() {
    return this.http.get(
      'http://localhost:8090/collegemanagement/packagedetails/list'
    );
  }
}
