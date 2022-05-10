
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { ProductListingComponent } from './product-listing.component';

@NgModule({
    declarations: [
        ProductListingComponent
    ],
    exports: [ProductListingComponent],
    imports: [
        CommonModule,RouterModule,
    ]
})
export class ProductListingModule { }
