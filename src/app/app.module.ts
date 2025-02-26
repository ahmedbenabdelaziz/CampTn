import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { ShopicampComponent } from './shopicamp/shopicamp.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { Index2Component } from './index2/index2.component';
import { CampingDetaillsComponent } from './camping-detaills/camping-detaills.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllcampingComponent } from './allcamping/allcamping.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
// Importation de Swiper
// Importer le composant autonome CategoryComponent

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
    EventComponent,
    HeaderComponent,
    // Pas besoin de déclarer CategoryComponent ici
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
