import { Component } from "@angular/core";
import { AdvancedComponentsComponent } from "./advanced-components/advanced-components.component";
import { DirectivesComponent } from "./directives/directives.component";
import { CustomPipesComponent } from "./custom-pipes/custom-pipes.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    imports: [AdvancedComponentsComponent, DirectivesComponent, CustomPipesComponent]
})
export class AppComponent {
  title = "angular-pro";
}
