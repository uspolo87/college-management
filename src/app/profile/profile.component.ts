import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor() {}

  ngOnInit(): void {
    const data: any = localStorage.getItem('user');
    this.user = JSON.parse(data);
    console.log(this.user);
  }
}
