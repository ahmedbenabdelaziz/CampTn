import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-shopicamp',
  standalone: false,
  templateUrl: './shopicamp.component.html',
  styleUrl: './shopicamp.component.scss'
})
export class ShopicampComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('.slider-active-5-item').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
       // Configuration responsive
    });
  }
}