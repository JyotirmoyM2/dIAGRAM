import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-capture',
  templateUrl: './add-capture.component.html',
  styleUrls: ['./add-capture.component.scss']
})
export class AddCaptureComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public scrollbarOptions : any = { axis: 'yx', theme: 'minimal-dark' };

}
