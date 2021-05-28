import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataObject = {
    eno: 1,
    ename: 'rajak',
    dept: 'dept1',
    sal: '1000',
    location: 'pune'
  }
  fileName = '';
  ngOnInit() {
    if (this.dataObject.ename === 'rajak') {
      this.fileName = 'test-template.log';
    }
    else {
      this.fileName = 'temp-template.log';
    }
  }

  createFile(){
    // var FileSaver = require('file-saver');
    // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    // FileSaver.saveAs(blob, "hello world.txt");

    let fileData = [];
    fileData.push(JSON.stringify(this.dataObject));

    var FileSaver = require('file-saver');
    var blob = new Blob(fileData, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, this.fileName);
  }
}
