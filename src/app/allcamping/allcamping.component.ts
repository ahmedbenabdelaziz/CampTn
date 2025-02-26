import { AfterViewInit, Component, ElementRef, ViewEncapsulation } from '@angular/core';
declare var $: any; // Déclare jQuery pour éviter d'éventuelles erreurs TypeScript

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
    this.initGallerySlider();
  }

  private initGallerySlider(): void {
    ($(this.elementRef.nativeElement).find('.slider-active-5-item') as any).slick({
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
