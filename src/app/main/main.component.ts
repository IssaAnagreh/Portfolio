import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { isArray } from 'util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  slideIndex: any = 1;
  slides:any;
  dots:any;
  slide:any;

  constructor() {}

  ngOnInit() {
    this.slides = $(".mySlides");
    this.dots = $(".dot");
    this.slide = $(".slide");
    this.currentSlide(this.slideIndex);
    this.AutoSlider();
  }

  showSlides(n) {
    let i;

    if (n < 0) { this.slideIndex = this.slides.length - 1 }
    if (n >= this.slides.length) { this.slideIndex = 0 }

    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(" active", "");
    }
    setTimeout(this.hide.bind(this), 850);
  }

  changeSlides(n) {
    this.slide.removeClass("slide-left-in");
    this.slide.addClass("slide-left-out");
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.slide.removeClass("slide-left-in");
    this.slide.addClass("slide-left-out");
    this.showSlides(this.slideIndex = n);
  }

  AutoSlider() {
    let scope = this;
    let i;
    if (this.slideIndex < 0) { this.slideIndex = this.slides.length - 1 }
    if (this.slideIndex >= this.slides.length) { this.slideIndex = 0 }

    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(" active", "");
    }

    setTimeout(this.hide.bind(this), 850);

    setTimeout(function () {
      if (this.slideIndex >= this.slides.length) { this.slideIndex = 0 }
      if (scope.slideIndex < 0) { scope.slideIndex = this.slides.length }
      this.slide.removeClass("slide-left-in");
      this.slide.addClass("slide-left-out");
      this.slideIndex++;
      this.AutoSlider()
    }.bind(this), 5000);
  }

  hide() {
    let i;
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    this.slides[this.slideIndex].style.display = "block";
    this.slide.removeClass("slide-left-out")
    this.slide.addClass("slide-left-in")
    this.dots[this.slideIndex].className += " active";
  }
}
