import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandsModule } from 'src/app/plugins/brands/brands.module';
import { FooterModule } from 'src/app/plugins/footer/footer.module';
import { ProductListingModule } from 'src/app/plugins/product-listing/product-listing.module';
import { RelatedProductsModule } from 'src/app/plugins/relatedProducts/relatedProducts.module';
import { NavbarModule } from './../../plugins/navbar/navbar.module';
import { ProductDetailsComponent } from './productDetails.component';
import { ProductDetailsRoutingModule } from './productDetails.routing.module';

@NgModule({
    declarations: [
        ProductDetailsComponent
    ],
    imports: [
        CommonModule,
        ProductDetailsRoutingModule,BrandsModule,ProductListingModule, RelatedProductsModule
    ]
})
export class ProductDetailsModule { }
