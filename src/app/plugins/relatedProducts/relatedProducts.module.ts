
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { RelatedProductsComponent } from './relatedProducts.component';

@NgModule({
    declarations: [
        RelatedProductsComponent
    ],
    exports: [RelatedProductsComponent],
    imports: [
        CommonModule,RouterModule
    ]
})
export class RelatedProductsModule { }
