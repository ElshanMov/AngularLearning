import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateProduct } from 'src/app/contracts/create_product';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild(ListComponent) listComponent: ListComponent;
  CreatedProduct(createProduct: CreateProduct) {
    this.listComponent.getProducts();
  }
}
