import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllcampingComponent } from './allcamping/allcamping.component';
import { CampingDetaillsComponent } from './camping-detaills/camping-detaills.component';
import { HomeComponent } from './home/home.component';
import { Payement2Component } from './payement2/payement2.component';
import { ProductComponent } from './product/product.component';
import { ShopicampComponent } from './shopicamp/shopicamp.component';

const routes: Routes = [
  
  { path: '', component: Payement2Component }, // Route par défaut
  { path: 'shopicamp', component: ShopicampComponent },
  
  { path: 'detailsprod', component: ProductComponent },
  { path: 'AboutusComponent', component: AboutusComponent },

  { path: 'produitcamp', component: HomeComponent },

  { path: 'allcamping', component: AllcampingComponent },
  
  { path: 'DetailsComp', component: CampingDetaillsComponent },

  { path: 'allcamp', component: AllcampingComponent },
  { path: 'allcamping', component: AllcampingComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
