import { Component, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-try-three',
  templateUrl: './try-three.component.html',
  styleUrls: ['./try-three.component.css']
})
export class TryThreeComponent implements OnInit {

  dataObject = {
    eno: 1,
    ename: 'rajak',
    dept: 'dept1',
    sal: '1000',
    location: 'pune'
  };

  fileName = '';

  constructor() { }

  ngOnInit() {
    if (this.dataObject.ename === 'rajak') {
      this.fileName = 'test-template.log';
    }
    else {
      this.fileName = 'temp-template.log';
    }
  }

  createLogFile() {
    let arrData = [];
    arrData.push(JSON.stringify(this.dataObject));
    let file = new Blob(arrData, { type: 'text/csv;charset=utf-8' });
    saveAs(file, this.fileName);

    // let file = new Blob(['hello world'], { type: 'text/csv;charset=utf-8' });
    // saveAs(file, 'helloworld.csv');
  }

}
