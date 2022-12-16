import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import {
  AlertifyMessageType,
  AlertifyNotifierPosition,
  AlertifyService,
} from '../../admin/alertify.service';
import {
  CustomToastrService,
  ToastrPosition,
  ToastrType,
} from '../../ui/custom-toastr.service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  constructor(
    private httpClientService: HttpClientService,
    private alertifyService: AlertifyService,
    private customToastrService: CustomToastrService
  ) {}
  public files: NgxFileDropEntry[];
  @Input() options: Partial<FileUploadOptions>;
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });
    }
    fileData.forEach((element) => {
      console.log(element);
    });
    this.httpClientService
      .post(
        {
          controller: this.options.controller,
          action: this.options.action,
          queryString: this.options.queryString,
          headers: new HttpHeaders({ responseType: 'blob' }),
        },
        fileData
      )
      .subscribe(
        (data) => {
          const message = 'Files uploaded successfully.';
          if (this.options.isAdminPage) {
            this.alertifyService.message(message, {
              messageType: AlertifyMessageType.Success,
              position: AlertifyNotifierPosition.TopRight,
            });
          } else {
            this.customToastrService.message(message, 'Successfuly.', {
              toastrType: ToastrType.Success,
              position: ToastrPosition.TopRight,
            });
          }
        },
        (errorResponse: HttpErrorResponse) => {
          const message: string =
            'An unexpected error was encountered while uploading files.';

          if (this.options.isAdminPage) {
            this.alertifyService.message(message, {
              messageType: AlertifyMessageType.Error,
              position: AlertifyNotifierPosition.TopRight,
            });
          } else {
            this.customToastrService.message(message, 'Unsuccessful.', {
              toastrType: ToastrType.Error,
              position: ToastrPosition.TopRight,
            });
          }
        }
      );
    debugger;
  }
}
export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}
