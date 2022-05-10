
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrandsComponent } from './brands.component';

@NgModule({
    declarations: [
        BrandsComponent
    ],
    exports: [BrandsComponent],
    imports: [
        CommonModule,
    ]
})
export class BrandsModule { }
