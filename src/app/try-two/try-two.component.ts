import { Component, OnInit } from '@angular/core';

//var fs = require('file-system');

@Component({
  selector: 'app-try-two',
  templateUrl: './try-two.component.html',
  styleUrls: ['./try-two.component.css']
})
export class TryTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  createLogFile() {
    // fs.mkdir('1/2/3/4/5', [mode], function (err) { });
    // fs.mkdirSync('1/2/3/4/5', [mode]);
    // fs.writeFile('assets/files/test.txt', 'aaa', function (err) {
    //   console.log(err);
    // })
  }
}
