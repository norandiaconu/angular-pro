import { Component } from "@angular/core";
import { ExampleOneComponent } from "./example-one/example-one.component";
import { ExampleTwoComponent } from "./example-two/example-two.component";
import { ExampleThreeComponent } from "./example-three/example-three.component";

@Component({
    selector: "view-encapsulation",
    templateUrl: "./view-encapsulation.component.html",
    styleUrls: ["./view-encapsulation.component.scss"],
    imports: [ExampleOneComponent, ExampleTwoComponent, ExampleThreeComponent]
})
export class ViewEncapsulationComponent {
  constructor() {}
}
