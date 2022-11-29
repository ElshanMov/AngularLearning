import { Component } from '@angular/core';
import {
  CustomToastrService,
  ToastrPosition,
  ToastrType,
} from './services/ui/custom-toastr.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastr: CustomToastrService) {}
  ngOnInit(): void {
    this.toastr.message('salam', 'hello', {
      position: ToastrPosition.TopRight,
      toastrType: ToastrType.Success,
    });
    $.get('https://jsonplaceholder.typicode.com/todos/1', function (data: any) {
      console.log(data.title);
    });
  }
}

$(document).ready(() => {
  console.log('salam');
});
