
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/app/plugins/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [NavbarComponent],
    imports: [
        CommonModule,RouterModule,MatMenuModule,
            
    ]
})
export class NavbarModule { }
