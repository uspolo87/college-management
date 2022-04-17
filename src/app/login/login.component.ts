import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router) {}

  validateuUser(userData: any) {
    console.log(userData);
    this.loginService.validaeUser(userData.value).subscribe((res) => {
      console.log(res);
      if (res) {
        window.localStorage.setItem('user', JSON.stringify(res));
        this.route.navigateByUrl('/home');
      }
    });
  }

  ngOnInit(): void {}
}
