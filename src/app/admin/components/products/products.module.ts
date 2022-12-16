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
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';

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
    SweetAlert2Module.forRoot(),
    FileUploadModule,
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
