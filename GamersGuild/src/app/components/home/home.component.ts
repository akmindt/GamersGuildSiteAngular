import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideIndex: number;
  constructor() { }

  ngOnInit() {
    this.slideIndex = 1;
    this.showDivs(this.slideIndex);
  }

  plusDivs(n) {
      this.showDivs(this.slideIndex += n);
  }
  showDivs(n) {
      let i;
      const x = document.getElementsByClassName('mySlides');
      if (n > x.length) {this.slideIndex = 1; }
      if (n < 1) {this.slideIndex = x.length; }
      for (i = 0; i < x.length; i++) {
          x[i].setAttribute('style', 'display: none;');
      }
      x[this.slideIndex - 1].setAttribute('style', 'display: inline-block;');
  }

}
