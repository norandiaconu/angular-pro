import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AuthFormComponent } from "./advanced-components/auth-form/auth-form.component";
import { AdvancedComponentsComponent } from "./advanced-components/advanced-components.component";
import { AuthRememberComponent } from "./advanced-components/auth-remember/auth-remember.component";
import { AuthMessageComponent } from "./advanced-components/auth-message/auth-message.component";
import { TemplateContainerComponent } from "./advanced-components/template-container/template-container.component";
import { ViewEncapsulationComponent } from "./advanced-components/view-encapsulation/view-encapsulation.component";
import { ExampleOneComponent } from "./advanced-components/view-encapsulation/example-one/example-one.component";
import { ExampleTwoComponent } from "./advanced-components/view-encapsulation/example-two/example-two.component";
import { ExampleThreeComponent } from "./advanced-components/view-encapsulation/example-three/example-three.component";
import { ChangeDetectionComponent } from "./advanced-components/change-detection/change-detection.component";
import { Example1Component } from "./advanced-components/change-detection/example-1/example-1.component";
import { Example2Component } from "./advanced-components/change-detection/example-2/example-2.component";
import { DirectivesComponent } from "./directives/directives.component";
import { CreditCardDirective } from "./directives/credit-card/credit-card.directive";
import { TooltipDirective } from "./directives/tooltip/tooltip.directive";
import { MyForDirective } from "./directives/my-for/my-for.directive";

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AdvancedComponentsComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    TemplateContainerComponent,
    ViewEncapsulationComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    ChangeDetectionComponent,
    Example1Component,
    Example2Component,
    DirectivesComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthFormComponent]
})
export class AppModule {}
