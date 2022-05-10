import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'src/app/plugins/carousel/carousel.module';
import { CategoriesMonthModule } from 'src/app/plugins/categories-month/categories-month.module';
import { FeaturedProductModule } from 'src/app/plugins/featuredproduct/featuredproduct.module';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,FeaturedProductModule,CarouselModule,CategoriesMonthModule
    ]
})
export class HomeModule { }
