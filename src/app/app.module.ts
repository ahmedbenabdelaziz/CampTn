import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllcampingComponent } from './allcamping/allcamping.component';
import { AppComponent } from './app.component';
import { CampingDetaillsComponent } from './camping-detaills/camping-detaills.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Index2Component } from './index2/index2.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { ShopicampComponent } from './shopicamp/shopicamp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    ShopicampComponent,
    LandingpageComponent,
    Index2Component,
    CampingDetaillsComponent,
    AboutusComponent,
    AllcampingComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }