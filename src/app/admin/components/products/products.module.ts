import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [ProductsComponent, CreateComponent, ListComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
      },
    ]),
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
