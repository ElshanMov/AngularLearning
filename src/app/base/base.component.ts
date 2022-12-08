import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}
  showSpinner(name: SpinnerName) {
    this.spinner.show(name);
    setTimeout(() => this.hideSpinner(name), 1000);
  }
  hideSpinner(name: SpinnerName) {
    this.spinner.hide(name);
  }
}
export enum SpinnerName {
  BallAtom = 's1',
  BallScaleMultiple = 's2',
  Timer = 's3',
}
