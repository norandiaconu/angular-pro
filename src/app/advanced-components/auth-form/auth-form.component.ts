import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from "@angular/core";
import { Subscription } from "rxjs";
import { AuthMessageComponent } from "../auth-message/auth-message.component";
import { AuthRememberComponent } from "../auth-remember/auth-remember.component";

interface User {
  email: string;
  password: string;
}

@Component({
  selector: "auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.scss"]
})
export class AuthFormComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @ContentChildren(AuthRememberComponent) rememberList: QueryList<
    AuthRememberComponent
  >;
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  @ViewChildren(AuthMessageComponent) messages: QueryList<AuthMessageComponent>;
  showMessage: boolean;
  subscription: Subscription;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.showMessage = false;
    this.subscription = new Subscription();
  }

  ngOnInit() {}

  ngAfterContentInit() {
    let tempSub: Subscription;
    if (this.remember) {
      console.log(this.remember);
      tempSub = this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
      this.subscription.add(tempSub);
    }
    if (this.rememberList) {
      console.log(this.rememberList);
      this.rememberList.forEach(item => {
        tempSub = item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked)
        );
        this.subscription.add(tempSub);
      });
    }
    if (this.message) {
      this.message.days = 30;
    }
  }

  ngAfterViewInit() {
    if (this.message) {
      console.log(this.message);
      this.messages.forEach(oneMessage => {
        oneMessage.days = 30;
      });
      this.changeDetector.detectChanges();
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
