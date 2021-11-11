import { Component, OnInit } from '@angular/core';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
} from "@syncfusion/ej2-angular-richtexteditor";
@Component({
  selector: 'app-add-capture',
  templateUrl: './add-capture.component.html',
  styleUrls: ['./add-capture.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})
export class AddCaptureComponent implements OnInit {
  public tools: object = {
    items: [
      "Undo",
      "Redo",
      "|",
      "Bold",
      "Italic",
      "Underline",
      "StrikeThrough",
      "|",
      "FontName",
      "FontSize",
      "FontColor",
      "BackgroundColor",
      "|",
      "SubScript",
      "SuperScript",
      "|",
      "LowerCase",
      "UpperCase",
      "|",
      "Formats",
      "Alignments",
      "|",
      "OrderedList",
      "UnorderedList",
      "|",
      "Indent",
      "Outdent",
      "|",
      "CreateLink",
      "Image",
      "|",
      "ClearFormat",
      "Print",
      "SourceCode",
      "|",
      "FullScreen",
    ],
  };
  public iframe: object = { enable: true };
  public height: number = 200;
  constructor() { }

  ngOnInit() {

  }

  public scrollbarOptions : any = { axis: 'yx', theme: 'minimal-dark' };

}
