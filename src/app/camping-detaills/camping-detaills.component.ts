import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

declare var $: any; // Déclare jQuery pour éviter les erreurs TypeScript
declare var WOW: any; // Pour l'effet d'animation si utilisé

@Component({
  selector: 'app-camping-detaills',
  standalone: false,
  templateUrl: './camping-detaills.component.html',
  styleUrls: ['./camping-detaills.component.scss'],
  encapsulation: ViewEncapsulation.None // Permet à Slick de bien appliquer ses styles
})
export class CampingDetaillsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }

    this.initSlider();
  }

  private initSlider(): void {
    $('.recent-place-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });
  
  }

}
