import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../../advanced-components.interface";

@Component({
  selector: "example-1",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./example-1.component.html",
  styleUrls: ["./example-1.component.scss"]
})
export class Example1Component {
  @Input() user: User = {
    email: "",
    password: ""
  };

  constructor() {}

  update(): void {
    this.user.name = "Matt Skiba";
  }
}
