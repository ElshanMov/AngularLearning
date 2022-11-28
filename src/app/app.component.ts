import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ECommerceClient';

  ngOnInit(): void {
    $.get('https://jsonplaceholder.typicode.com/todos/1', function (data: any) {
      console.log(data.title);
    });
  }
}

$(document).ready(() => {
  console.log('salam');
});
