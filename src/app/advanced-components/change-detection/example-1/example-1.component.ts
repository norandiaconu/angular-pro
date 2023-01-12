import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from "@angular/core";

@Component({
  selector: "example-1",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./example-1.component.html",
  styleUrls: ["./example-1.component.scss"]
})
export class Example1Component {
  @Input() user;

  constructor() {}

  update(): void {
    this.user.name = "Matt Skiba";
  }
}
