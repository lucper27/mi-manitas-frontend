import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpRequestIntercept} from "./config/interceptor/http-request-interceptor.interceptor";
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { OfferListComponent } from './entities/offer/offer-list/offer-list.component';
import { ProfessionalDetailComponent } from './entities/professional/professional-detail/professional-detail.component';
import { ProfessionalListComponent } from './entities/professional/professional-list/professional-list.component';
import {OfferDetailComponent} from "./entities/offer/offer-detail/offer-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    OfferDetailComponent,
    OfferListComponent,
    ProfessionalDetailComponent,
    ProfessionalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestIntercept,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
