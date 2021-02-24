import { Component, OnInit } from "@angular/core";
import { FilesizePipe } from "./filesize.pipe";

interface File {
  name: string;
  size: number;
  type: string;
}
interface FileStringSize {
  name: string;
  size: string;
  type: string;
}

@Component({
  selector: "custom-pipes",
  templateUrl: "./custom-pipes.component.html",
  styleUrls: ["./custom-pipes.component.scss"]
})
export class CustomPipesComponent implements OnInit {
  files: File[];
  mapped: FileStringSize[];
  fileProperty: any;

  constructor(private fileSizePipe: FilesizePipe) {}

  ngOnInit(): void {
    this.files = [
      {
        name: "logo.svg",
        size: 2120109,
        type: "image/svg"
      },
      {
        name: "banner.jpg",
        size: 18029,
        type: "image/jpg"
      },
      {
        name: "background.png",
        size: 1784562,
        type: "image/png"
      }
    ];
    this.mapped = this.files.map(file => {
      console.log("size", file.size);
      return {
        name: file.name,
        size: this.fileSizePipe.transform(file.size, " MB"),
        type: file.type
      };
    });
  }
}
