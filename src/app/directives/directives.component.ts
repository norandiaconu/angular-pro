import { Component } from "@angular/core";

@Component({
  selector: "directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"]
})
export class DirectivesComponent {
  items = [
    { name: "Mark Hoppus", age: 48, location: "California" },
    { name: "Tom Delonge", age: 45, location: "California" },
    { name: "Travis Barker", age: 45, location: "California" }
  ];

  constructor() {
    setTimeout(() => {
      this.items = [
        ...this.items,
        {
          name: "Matt Skiba",
          age: 44,
          location: "California"
        }
      ];
    }, 5000);
  }
}
