import { Component, OnInit } from '@angular/core';

// const errorLog = require('../../assets/files').errorlog;
// const successlog = require('../../assets/files').successlog;

@Component({
  selector: 'app-try-one',
  templateUrl: './try-one.component.html',
  styleUrls: ['./try-one.component.css']
})
export class TryOneComponent implements OnInit {
  // https://stackoverflow.com/questions/8393636/node-log-in-a-file-instead-of-the-console
  //winston https://github.com/winstonjs/winston
  // log4js https://github.com/nomiddlename/log4js-node
  variable = 'some successful message';
  error = 'some error message';
  constructor() { }

  ngOnInit() {
    //successlog.info(`Success Message and variables: ${this.variable}`);
    //errorlog.error(`Error Message : ${this.error}`);
  }

  createLogFile() {
  }

}
