import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Imports des composants
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllcampingComponent } from './allcamping/allcamping.component';
import { AppComponent } from './app.component';
import { CampingDetaillsComponent } from './camping-detaills/camping-detaills.component';
import { HeaderComponent } from './header/header.component';
import { HistorycampComponent } from './historycamp/historycamp.component';
import { HomeComponent } from './home/home.component';
import { Index2Component } from './index2/index2.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { ShopicampComponent } from './shopicamp/shopicamp.component';
import { ContactComponent } from './contact/contact.component';
import { PayementcheckoutComponent } from './payementcheckout/payementcheckout.component';
import { Payement2Component } from './payement2/payement2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    AboutusComponent,
    ShopicampComponent,
    LandingpageComponent,
    Index2Component,
    CampingDetaillsComponent,
    AllcampingComponent,
    HeaderComponent,
    ContactComponent,
    PayementcheckoutComponent,
    Payement2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HistorycampComponent // Ajouté dans les déclarations

    // Retiré HistorycampComponent des imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }