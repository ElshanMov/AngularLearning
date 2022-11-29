import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  message(
    message: string,
    alertifyOptions: Partial<AlertifyOptions>,
    dismissOthers: boolean = false
  ) {
    alertify.set('notifier', 'position', alertifyOptions.position);
    dismissOthers
      ? alertify[alertifyOptions.messageType](message).dismissOthers()
      : alertify[alertifyOptions.messageType](message);
  }
}
export class AlertifyOptions {
  messageType: AlertifyMessageType;
  position: AlertifyNotifierPosition;
}

export enum AlertifyMessageType {
  Error = 'error',
  Success = 'success',
  Message = 'message',
  Notify = 'notify',
  Warning = 'warning',
}
export enum AlertifyNotifierPosition {
  TopCenter = 'top-center',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
}
