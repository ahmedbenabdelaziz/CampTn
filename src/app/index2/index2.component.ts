import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import 'aos/dist/aos.css';
declare var $: any; // Déclare jQuery pour éviter d'éventuelles erreurs TypeScript

declare var WOW: any;



@Component({
  selector: 'app-index2',
  standalone: false,
  encapsulation: ViewEncapsulation.None ,
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.scss'] // Correction ici
})
export class Index2Component   implements AfterViewInit {

  ngAfterViewInit() {
    // Service Slider
    $('.slider-active-4-item').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 }},
        { breakpoint: 992, settings: { slidesToShow: 2 }},
        { breakpoint: 768, settings: { slidesToShow: 1 }}
      ]
    });

    // Gallery Slider
    $('.slider-active-5-item').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 }},
        { breakpoint: 992, settings: { slidesToShow: 3 }},
        { breakpoint: 768, settings: { slidesToShow: 2 }},
        { breakpoint: 576, settings: { slidesToShow: 1 }}
      ]
    });
  }
}