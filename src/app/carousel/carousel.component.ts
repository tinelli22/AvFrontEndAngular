import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [
    { img: '../../assets/images/img_carousel.png' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
