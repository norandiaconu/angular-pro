import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { Subscription } from "rxjs";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { User } from "./advanced-components.interface";

@Component({
  selector: "advanced-components",
  templateUrl: "./advanced-components.component.html",
  styleUrls: ["./advanced-components.component.scss"]
})
export class AdvancedComponentsComponent implements AfterContentInit, OnDestroy {
  @ViewChild("entry", { read: ViewContainerRef, static: true }) entry!: ViewContainerRef;
  @ViewChild("template") template!: TemplateRef<any>;

  rememberMe = false;
  subscription!: Subscription;
  component!: ComponentRef<AuthFormComponent>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = "Dynamic Create";
    this.subscription = this.component.instance.submitted.subscribe(this.createUser);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createUser(user: User): void {
    console.log("Create Account", user);
  }
  loginUser(user: User): void {
    console.log("Login Account", user, this.rememberMe);
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  destroyComponent(): void {
    this.component.destroy();
  }

  moveComponent(): void {
    this.entry.move(this.component.hostView, 1);
  }
}
