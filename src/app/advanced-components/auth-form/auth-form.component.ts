import { AfterContentInit, Component, ContentChild, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit, AfterContentInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  showMessage: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.remember) {
      console.log(this.remember);
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
  
}
