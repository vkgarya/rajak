import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { Observable, of } from "rxjs";

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

  createFile() {
    saveAs(this.dataObject, this.fileName);
  }

  fakeValidateUserData() {
    return of(this.dataObject);
  }

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

  dynamicDownloadTxt() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: this.fileName,
        text: JSON.stringify(res)
      });
    });

  }

  dynamicDownloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: this.fileName,
        text: JSON.stringify(res)
      });
    });
  }

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }

  // reference : https://stackoverflow.com/a/51806624/7291379
  // author : UnluckyAj
  //  private dyanmicDownloadByBlob(arg: {
  //   fileName: string,
  //   text: string
  // }) {
  //     const fileType = arg.fileName.indexOf('.json') > -1 ? 'application/json' : 'text/plain';
  //   var blob = new Blob([arg.text], { type: fileType });
  //   var url = window.URL.createObjectURL(blob);
  //   var pwa = window.open(url);
  //   if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
  //       alert('Please disable your Pop-up blocker and try again.');
  //   }
  // }
}
