import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpRequestIntercept} from "./config/interceptor/http-request-interceptor.interceptor";
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { OfferListComponent } from './entities/offer/offer-list/offer-list.component';
import { ProfessionalDetailComponent } from './entities/professional/professional-detail/professional-detail.component';
import { ProfessionalListComponent } from './entities/professional/professional-list/professional-list.component';
import {OfferDetailComponent} from "./entities/offer/offer-detail/offer-detail.component";
import { CardComponent } from './layout/card/card.component';
import { FiltersComponent } from './layout/filters/filters.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CheckboxModule} from "primeng/checkbox";
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    OfferDetailComponent,
    OfferListComponent,
    ProfessionalDetailComponent,
    ProfessionalListComponent,
    CardComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CheckboxModule,
    InputSwitchModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestIntercept,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
