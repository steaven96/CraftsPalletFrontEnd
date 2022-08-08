import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { AdminCategoriesFormComponent } from './admin-categories-form/admin-categories-form.component';
import { AdminCustomerComponent } from './admin-customers/admin-customer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin.login.component';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { AdminProductSubCategoriesComponent } from './admin-product-subcategories/admin-products-subcategories.component';
import { AdminProductTemplateFormComponent } from './admin-product-template-form/admin-product-template-form.component';
import { AdminProductTemplateComponent } from './admin-product-template/admin-product-template.component';
import { AdminProductCategoriesComponent } from './admin-products-categories/admin-products-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminSubCategoriesFormComponent } from './admin-subcategories-form/admin-subcategories-form.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'login', component: AdminLoginComponent },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'product-category',
        component: AdminProductCategoriesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'customers',
        component: AdminCustomerComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'products/add-product',
        component: AdminProductFormComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'products/edit-product/:id',
        component: AdminProductFormComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'product-category/add-categorires',
        component: AdminCategoriesFormComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'product-subcategory',
        component: AdminProductSubCategoriesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'product-subcategory/add-subcategorires',
        component: AdminSubCategoriesFormComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'product-templates',
        component: AdminProductTemplateComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'product-templates/add-product-templates',
        component: AdminProductTemplateFormComponent,
        canActivate: [AuthGuard],
      },
    ],
  },

  // { path: 'dashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
