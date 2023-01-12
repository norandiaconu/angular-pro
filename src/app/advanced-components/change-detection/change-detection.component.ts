import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "change-detection",
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: "./change-detection.component.html",
  styleUrls: ["./change-detection.component.scss"]
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
