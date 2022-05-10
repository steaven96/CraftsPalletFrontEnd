import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandsModule } from 'src/app/plugins/brands/brands.module';
import { FooterModule } from 'src/app/plugins/footer/footer.module';
import { ProductListingModule } from 'src/app/plugins/product-listing/product-listing.module';
import { NavbarModule } from './../../plugins/navbar/navbar.module';
import { ShoppingComponent } from './shopping.component';
import { ShoppingRoutingModule } from './shopping.routing.module';

@NgModule({
    declarations: [
        ShoppingComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule ,NavbarModule,FooterModule,BrandsModule,ProductListingModule
    ]
})
export class ShoppingModule { }
