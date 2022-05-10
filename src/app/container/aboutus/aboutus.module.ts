import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandsModule } from 'src/app/plugins/brands/brands.module';
import { CarouselModule } from 'src/app/plugins/carousel/carousel.module';
import { CategoriesMonthModule } from 'src/app/plugins/categories-month/categories-month.module';
import { FeaturedProductModule } from 'src/app/plugins/featuredproduct/featuredproduct.module';
import { FooterModule } from 'src/app/plugins/footer/footer.module';
import { NavbarModule } from './../../plugins/navbar/navbar.module';
import { AboutusComponent } from './aboutus.component';
import { AboutusRoutingModule } from './aboutus.routing.module';

@NgModule({
    declarations: [
        AboutusComponent
    ],
    imports: [
        CommonModule,
        AboutusRoutingModule ,NavbarModule,FooterModule,BrandsModule
    ]
})
export class AboutusModule { }
