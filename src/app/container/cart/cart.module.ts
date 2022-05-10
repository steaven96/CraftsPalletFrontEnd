import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrandsModule } from 'src/app/plugins/brands/brands.module';
import { CarouselModule } from 'src/app/plugins/carousel/carousel.module';
import { CategoriesMonthModule } from 'src/app/plugins/categories-month/categories-month.module';
import { FeaturedProductModule } from 'src/app/plugins/featuredproduct/featuredproduct.module';
import { FooterModule } from 'src/app/plugins/footer/footer.module';
import { NavbarModule } from './../../plugins/navbar/navbar.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule ,NavbarModule,FooterModule,BrandsModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule
    ]
})
export class CartModule { }
