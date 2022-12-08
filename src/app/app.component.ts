import { Component } from '@angular/core';
import { CreateProduct } from './contracts/create_product';
import { HttpClientService } from './services/common/http-client.service';
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
  constructor(
    private toastr: CustomToastrService,
    private httpClientService: HttpClientService
  ) {}
  ngOnInit(): void {
    this.toastr.message('salam', 'hello', {
      position: ToastrPosition.TopRight,
      toastrType: ToastrType.Success,
    });
    console.log('ajax');
    $.get('https://localhost:7160/api/products', function (data: any) {
      console.log(data);
    });
    console.log('------------HttpClientService-----------');

    this.httpClientService
      .get<CreateProduct>({ controller: 'products' })
      .subscribe((data) => console.log(data));

    // this.httpClientService
    //   .remove<Product>(
    //     { controller: 'products' },
    //     '2559a1f2-21d7-11d4-bdaf-00c04f70b9e4'
    //   )
    //   .subscribe((data) => console.log(data));

    // this.httpClientService
    //   .update<Product>(
    //     {
    //       controller: 'products',
    //       action: 'update',
    //     },
    //     {
    //       price: 20,
    //       name: 'Unknown',
    //       id: '05dd0053-77bc-4f37-a225-08dacd79e5cc',
    //       stock: 30,
    //     }
    //   )
    //   .subscribe((data) => console.log(data));
  }
}

$(document).ready(() => {
  console.log('salam');
});
