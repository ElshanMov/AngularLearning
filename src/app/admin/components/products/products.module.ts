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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    FontAwesomeModule,

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
