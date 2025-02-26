import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
declare var $: any; // Déclare jQuery pour éviter d'éventuelles erreurs TypeScript

declare var WOW: any;


@Component({
  selector: 'app-product',
  standalone: false,
  encapsulation: ViewEncapsulation.None ,
  templateUrl :'./product.component.html',
  styleUrl: './product.component.css',

})
export class ProductComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }}