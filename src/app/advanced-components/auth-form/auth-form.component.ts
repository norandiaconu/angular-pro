import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
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
  implements AfterContentInit, AfterViewInit, OnDestroy {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent;
  @ContentChildren(AuthRememberComponent) rememberList: QueryList<
    AuthRememberComponent
  >;
  @ViewChild(AuthMessageComponent, { static: true })
  message: AuthMessageComponent;
  @ViewChildren(AuthMessageComponent) messages: QueryList<AuthMessageComponent>;
  @ViewChild("email", { static: true }) email: ElementRef;
  @ViewChild("password", { static: true }) password: ElementRef;
  @ViewChild("createButton") createButton: ElementRef;

  showMessage: boolean;
  subscription: Subscription;
  useRenderer: boolean;
  title: string;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    this.showMessage = false;
    this.subscription = new Subscription();
    this.useRenderer = false;
    this.title = "";
  }

  ngAfterContentInit(): void {
    let tempSub: Subscription;
    if (this.remember) {
      console.log("afterContentInit remember", this.remember);
      tempSub = this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
      this.subscription.add(tempSub);
    }
    if (this.rememberList) {
      console.log("afterContentInit rememberList", this.rememberList);
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

  ngAfterViewInit(): void {
    this.email.nativeElement.setAttribute(
      "placeholder",
      "Enter your email address"
    );
    this.email.nativeElement.classList.add("email");
    this.renderer.setAttribute(
      this.password.nativeElement,
      "placeholder",
      "Enter your password"
    );
    this.renderer.addClass(this.password.nativeElement, "password");
    this.password.nativeElement["focus"].apply(this.password.nativeElement);
    this.email.nativeElement.focus();
    console.log("afterViewInit email", this.email.nativeElement);
    if (this.message) {
      console.log("afterViewInit message", this.message);
      this.messages.forEach(oneMessage => {
        oneMessage.days = 30;
      });
      this.changeDetector.detectChanges();
    }
    if (this.createButton) {
      this.createButton.nativeElement.classList.add("createButton");
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
