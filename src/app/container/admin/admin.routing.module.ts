import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriesFormComponent } from './admin-categories-form/admin-categories-form.component';
import { AdminCustomerComponent } from './admin-customers/admin-customer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
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
		path: '', component: AdminComponent, children: [
			{ path: 'dashboard', component: AdminDashboardComponent },
			{ path: 'products', component: AdminProductsComponent },
			{ path: 'product-category', component: AdminProductCategoriesComponent },
			{ path: 'customers', component: AdminCustomerComponent },
			{ path: 'products/add-product', component: AdminProductFormComponent },
			{ path: 'product-category/add-categorires', component: AdminCategoriesFormComponent },
			{ path: 'product-subcategory', component: AdminProductSubCategoriesComponent },
			{ path: 'product-subcategory/add-subcategorires', component: AdminSubCategoriesFormComponent },
			{ path: 'product-templates', component: AdminProductTemplateComponent },
			{ path: 'product-templates/add-product-templates', component: AdminProductTemplateFormComponent },
		],
	},

	// { path: 'dashboard', component: AdminDashboardComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
