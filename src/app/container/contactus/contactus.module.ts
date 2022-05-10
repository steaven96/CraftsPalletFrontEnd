import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'src/app/plugins/carousel/carousel.module';
import { CategoriesMonthModule } from 'src/app/plugins/categories-month/categories-month.module';
import { FeaturedProductModule } from 'src/app/plugins/featuredproduct/featuredproduct.module';
import { FooterModule } from 'src/app/plugins/footer/footer.module';
import { NavbarModule } from './../../plugins/navbar/navbar.module';
import { ContactusComponent } from './contactus.component';
import { ContactusRoutingModule } from './contactus.routing.module';

@NgModule({
    declarations: [
        ContactusComponent
    ],
    imports: [
        CommonModule,
        ContactusRoutingModule ,NavbarModule,FooterModule
    ]
})
export class ContactusModule { }
