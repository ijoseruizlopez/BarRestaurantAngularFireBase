import { Component, OnInit } from '@angular/core';
import * as M  from '../../../../assets/materialize/js/materialize.min.js'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  options={};
  
  ngOnInit() {
    var elems= document.querySelector('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }

}
