
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';
import { FeaturedProductComponent } from './featuredproduct.component';

@NgModule({
    declarations: [
        FeaturedProductComponent
    ],
    exports: [FeaturedProductComponent],
    imports: [
        CommonModule,
    ],
    providers: [ProductService]
})
export class FeaturedProductModule { }
