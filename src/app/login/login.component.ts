import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  validateuUser(userData: any) {
    console.log(userData);
    this.loginService.validaeUser(userData.value).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
}
