import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contracts/create_product';
import { BaseComponent, SpinnerName } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClientService: HttpClientService) {}

  add(createProduct: CreateProduct, successcallback?: any) {
    this.httpClientService
      .post<CreateProduct>(
        {
          controller: 'products',
        },
        createProduct
      )
      .subscribe((result) => {
        successcallback();
      });
  }
}
