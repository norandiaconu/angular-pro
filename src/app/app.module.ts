import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
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
import { CustomPipesComponent } from "./custom-pipes/custom-pipes.component";
import { FilesizePipe } from "./custom-pipes/filesize.pipe";
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
    { path: "route", component: RoutesComponent }
];

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
        MyForDirective,
        CustomPipesComponent,
        FilesizePipe,
        HighlightDirective,
        RoutesComponent
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [FilesizePipe],
    bootstrap: [AppComponent]
})
export class AppModule {}
