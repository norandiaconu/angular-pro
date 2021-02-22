import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "example-one",
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: "./example-one.component.html",
  styleUrls: ["./example-one.component.scss"]
})
export class ExampleOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
