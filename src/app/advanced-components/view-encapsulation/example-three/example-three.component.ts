import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "example-three",
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./example-three.component.html",
  styleUrls: ["./example-three.component.scss"]
})
export class ExampleThreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
