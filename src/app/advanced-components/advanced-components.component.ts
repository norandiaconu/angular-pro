import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { AuthFormComponent } from "./auth-form/auth-form.component";

interface User {
  address: string;
  password: string;
}

@Component({
  selector: "advanced-components",
  templateUrl: "./advanced-components.component.html",
  styleUrls: ["./advanced-components.component.scss"]
})
export class AdvancedComponentsComponent implements OnInit, AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;

  rememberMe: boolean = false;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = "Dynamic Create";
    component.instance.submitted.subscribe(this.createUser);
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
