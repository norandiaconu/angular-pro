import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Example1Component } from "./example-1/example-1.component";
import { Example2Component } from "./example-2/example-2.component";

@Component({
    selector: "change-detection",
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: "./change-detection.component.html",
    styleUrls: ["./change-detection.component.scss"],
    standalone: true,
    imports: [Example1Component, Example2Component]
})
export class ChangeDetectionComponent {
  user: any = {
    name: "Mark Hoppus",
    age: 48,
    location: "California"
  };

  constructor() {}

  addProp(): void {
    this.user.email = "blink-182.net";
  }

  changeUser(): void {
    this.user = {
      name: "Tom Delonge",
      age: 45,
      location: "California"
    };
  }

  changeName(): void {
    this.user.name = "Travis Barker";
  }
}
