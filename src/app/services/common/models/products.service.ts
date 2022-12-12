import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { ListProduct } from 'src/app/contracts/list_product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClientService: HttpClientService) {}

  add(
    createProduct: CreateProduct,
    successcallback?: () => void,
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

  async read(
    page: number = 0,
    size: number = 5,
    successcallback?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<{ totalCount: number; products: ListProduct[] }> {
    const promiseData: Promise<{
      totalCount: number;
      products: ListProduct[];
    }> = this.httpClientService
      .get<{ totalCount: number; products: ListProduct[] }>({
        controller: 'products',
        queryString: `pageIndex=${page}&pageSize=${size}`,
      })
      .toPromise();
    promiseData
      .then((d) => successcallback())
      .catch((errorResponse: HttpErrorResponse) => {
        errorCallBack(errorResponse.message);
      });
    return await promiseData;
  }
}
