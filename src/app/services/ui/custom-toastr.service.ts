import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) {}
  message(
    title: string,
    message: string,
    toastrOption: Partial<ToastrOptions>
  ) {
    this.toastr[toastrOption.toastrType](message, title, {
      positionClass: toastrOption.position,
    });
  }
}

export class ToastrOptions {
  toastrType: ToastrType;
  position: ToastrPosition;
}
export enum ToastrPosition {
  TopRight = 'toast-top-right',
  BottomRight = 'toast-bottom-right',
  BottomLeft = 'toast-bottom-left',
  TopLeft = 'toast-top-left',
  TopFullWidth = 'toast-top-full-width',
  BottomFullWidth = 'toast-bottom-full-width',
  TopCenter = 'toast-top-center',
  BottomCenter = 'toast-bottom-center',
}
export enum ToastrType {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}
