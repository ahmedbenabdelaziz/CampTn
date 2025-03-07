import { AfterViewInit, Component, ElementRef, ViewEncapsulation } from '@angular/core';

declare var $: any; // Déclare jQuery pour éviter les erreurs TypeScript

@Component({
  selector: 'app-allcamping',
  standalone: false,
  templateUrl: './allcamping.component.html',
  styleUrls: ['./allcamping.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AllcampingComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.initGallerySlider(), 500); // Ajout d'un délai pour attendre le rendu
  }

  private initGallerySlider(): void {
    const slider = $(this.elementRef.nativeElement).find('.slider-active-5-item');

    if (!slider.length) {
      console.error("Erreur : Élément '.slider-active-5-item' introuvable.");
      return;
    }

    // Vérification que jQuery et Slick sont bien chargés
    if (typeof $ === 'undefined' || typeof $.fn.slick === 'undefined') {
      console.error("Erreur : jQuery ou Slick n'est pas chargé.");
      return;
    }

    // Si le slider est déjà initialisé, le réinitialiser pour éviter les doublons
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }

    slider.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 }},
        { breakpoint: 992, settings: { slidesToShow: 3 }},
        { breakpoint: 768, settings: { slidesToShow: 2 }},
        { breakpoint: 576, settings: { slidesToShow: 1 }}
      ]
    });
  }
}
