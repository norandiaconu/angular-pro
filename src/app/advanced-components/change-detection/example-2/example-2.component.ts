import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";

@Component({
  selector: "example-2",
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: "./example-2.component.html",
  styleUrls: ["./example-2.component.scss"]
})
export class Example2Component implements OnInit {
  @Input() user;

  constructor() {}

  ngOnInit(): void {}

  update(): void {
    this.user.name = "Matt Skiba";
  }
}
