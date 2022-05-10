
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';

@NgModule({
    declarations: [
        CarouselComponent
    ],
    exports: [CarouselComponent],
    imports: [
        CommonModule,
    ]
})
export class CarouselModule { }
