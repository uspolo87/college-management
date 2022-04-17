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

  addAdmin(userData: any) {
    const headers = { 'content-type': 'application/json' };
    const user = {
      aemail: userData.userEmail,
      apassword: userData.userPassword,
    };
    return this.http.post(
      'http://localhost:8090/collegemanagement/admin/add-admin',
      user,
      { headers: headers }
    );
  }

  addStudent(userData: any) {
    const headers = { 'content-type': 'application/json' };
    const user = {
      aemail: userData.userEmail,
      apassword: userData.userPassword,
    };
    return this.http.post(
      'http://localhost:8090/collegemanagement/admin/add-admin',
      user,
      { headers: headers }
    );
  }

  addFaculty(userData: any) {
    const headers = { 'content-type': 'application/json' };
    const user = {
      aemail: userData.userEmail,
      apassword: userData.userPassword,
    };
    return this.http.post(
      'http://localhost:8090/collegemanagement/admin/add-admin',
      user,
      { headers: headers }
    );
  }
}
