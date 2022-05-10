
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesMonthComponent } from './categories-month.component';

@NgModule({
    declarations: [
        CategoriesMonthComponent
    ],
    exports: [CategoriesMonthComponent],
    imports: [
        CommonModule,
    ]
})
export class CategoriesMonthModule { }
