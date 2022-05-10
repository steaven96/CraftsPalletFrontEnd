import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarModule } from './plugins/navbar/navbar.module';
import { FooterModule } from './plugins/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { UniversalStorage } from './services/universal.storage';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, NavbarModule, FooterModule, HttpClientModule, MatCheckboxModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [CookieService,UniversalStorage],
  bootstrap: [AppComponent],
})
export class AppModule { }
