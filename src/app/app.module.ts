import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AuthFormComponent } from "./advanced-components/auth-form/auth-form.component";
import { AdvancedComponentsComponent } from "./advanced-components/advanced-components.component";
import { AuthRememberComponent } from "./advanced-components/auth-remember/auth-remember.component";
import { AuthMessageComponent } from "./advanced-components/auth-message/auth-message.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AdvancedComponentsComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}