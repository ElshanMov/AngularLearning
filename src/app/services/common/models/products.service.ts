import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contracts/create_product';
import { BaseComponent, SpinnerName } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClientService: HttpClientService) {}

  add(
    createProduct: CreateProduct,
    successcallback?: any,
    errorCallBack?: (errorMessage: string) => void
  ) {
    this.httpClientService
      .post<CreateProduct>(
        {
          controller: 'products',
        },
        createProduct
      )
      .subscribe(
        (result) => {
          successcallback();
        },
        (errorResponse: HttpErrorResponse) => {
          const _error: Array<{ key: string; value: Array<string> }> =
            errorResponse.error;
          let message = '';
          _error.forEach((v, index) => {
            v.value.forEach((_v, index) => {
              message += `${_v}<br>`;
            });
          });
          errorCallBack(message);
        }
      );
  }
}
