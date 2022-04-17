import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

import { Router } from '@angular/router'; // rotes

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router) {}

  validateuUser(userData: any) {
    console.log(userData);
    if (userData.value.userType === 'admin') {
      this.loginService.addAdmin(userData.value).subscribe((res) => {
        if (res) {
          window.localStorage.setItem('user', JSON.stringify(res));
          this.route.navigateByUrl('/home');
        }
      });
    } else if (userData.value.userType === 'student') {
      this.loginService.addStudent(userData.value).subscribe((res) => {
        if (res) {
          window.localStorage.setItem('user', JSON.stringify(res));
          this.route.navigateByUrl('/home');
        }
      });
    } else if (userData.value.userType === 'faculty') {
      this.loginService.addFaculty(userData.value).subscribe((res) => {
        if (res) {
          window.localStorage.setItem('user', JSON.stringify(res));
          this.route.navigateByUrl('/home');
        }
      });
    }
  }

  ngOnInit(): void {}
}
