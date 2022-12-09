import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerName } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contracts/create_product';
import {
  AlertifyMessageType,
  AlertifyNotifierPosition,
  AlertifyOptions,
  AlertifyService,
} from 'src/app/services/admin/alertify.service';
import { ProductsService } from 'src/app/services/common/models/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends BaseComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    spinner: NgxSpinnerService,
    private alertify: AlertifyService
  ) {
    super(spinner);
  }

  ngOnInit(): void {}
  create(
    txtName: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.showSpinner(SpinnerName.BallAtom);
    let createProduct = new CreateProduct();
    createProduct.name = txtName.value;
    createProduct.price = parseInt(stock.value);
    createProduct.price = parseFloat(price.value);
    this.productService.add(
      createProduct,
      () => {
        this.hideSpinner(SpinnerName.BallAtom);
        this.alertify.message('Product added', {
          position: AlertifyNotifierPosition.TopRight,
          messageType: AlertifyMessageType.Success,
        });
      },
      (errorMessage) => {
        this.alertify.message(errorMessage, {
          messageType: AlertifyMessageType.Error,
          position: AlertifyNotifierPosition.TopRight,
        });
      }
    );
  }
}
