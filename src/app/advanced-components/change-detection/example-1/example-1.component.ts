import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";

@Component({
  selector: "example-1",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./example-1.component.html",
  styleUrls: ["./example-1.component.scss"]
})
export class Example1Component implements OnInit {
  @Input() user;

  constructor() {}

  ngOnInit(): void {}

  update(): void {
    this.user.name = "Matt Skiba";
  }
}
