import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "example-two",
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: "./example-two.component.html",
  styleUrls: ["./example-two.component.scss"]
})
export class ExampleTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
