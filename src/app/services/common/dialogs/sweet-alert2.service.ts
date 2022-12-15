import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { SweetAlertResult } from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Injectable({
  providedIn: 'root',
})
export class SweetAlert2Service {
  constructor() {}
  sweetAlert(
    sweetAlert2Configure: Partial<SweetAlert2Configure>,
    success?: () => void,
    error?: () => void
  ) {
    Swal.fire({
      title: sweetAlert2Configure.title,
      text: sweetAlert2Configure.text,
      icon: sweetAlert2Configure.icon,
      showCancelButton: sweetAlert2Configure.showCancelButton,
      confirmButtonText: sweetAlert2Configure.confirmButtonText,
      cancelButtonText: sweetAlert2Configure.cancelButtonText,
      confirmButtonColor: (sweetAlert2Configure.cancelButtonColor = '#3085d6'),
      cancelButtonColor: (sweetAlert2Configure.cancelButtonColor = '#d33'),
    }).then((result) => {
      if (result.value) {
        success();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          (sweetAlert2Configure.errorTitle = 'Cancelled'),
          (sweetAlert2Configure.errorText = 'Happen to unknown error :('),
          (sweetAlert2Configure.errorIcon = SweetIcon.Error)
        ).then((result) => {
          if (result.isConfirmed) {
            error != undefined
              ? setTimeout(() => {
                  error();
                }, 100)
              : '';
          }
        });
      }
    });
  }
}
export class SweetAlert2Configure {
  icon?: SweetIcon.Warning;
  title?: string;
  text?: string;
  showCancelButton: boolean = true;
  confirmButtonText: string;
  cancelButtonText: string;
  confirmButtonColor: string;
  cancelButtonColor: string;
  errorTitle?: string = 'Cancelled';
  errorText?: string = 'happen to unknown error';
  errorIcon?: SweetIcon.Error;
}
export enum SweetIcon {
  Warning = 'warning',
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Question = 'question',
}
