import { Component, OnInit } from '@angular/core';

interface User {
  address: string,
  password: string
}

@Component({
  selector: 'advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.css']
})
export class AdvancedComponentsComponent implements OnInit {
  rememberMe: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  createUser(user: User) {
    console.log("Create Account", user);
  }
  loginUser(user: User) {
    console.log("Login Account", user, this.rememberMe);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

}
