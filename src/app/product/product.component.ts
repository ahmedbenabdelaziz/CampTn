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
    thumbnails = [
    'assets/images/product-thumb-1.jpg',
    'assets/images/product-thumb-2.jpg',
    'assets/images/product-thumb-3.jpg'
  ];
  ngAfterViewInit(): void {
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
    $('.product-big-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.product-thumb-slider'
    });

    $('.product-thumb-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-big-slider',
      dots: true,
      focusOnSelect: true
    });
  
  }}