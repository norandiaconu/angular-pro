import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "example-three",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./example-three.component.html",
    styleUrls: ["./example-three.component.scss"],
    standalone: true
})
export class ExampleThreeComponent {
  constructor() {}
}
