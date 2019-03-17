import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
    $(function () {
      let header = $(".navbar-basic");
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        // console.log("scroll", scroll)
        if (scroll <= 25) {
          header.removeClass('navbar-hidden').addClass("navbar-basic");
          header.removeClass('navbar-opaque').addClass("navbar-basic");
        }
        if (scroll > 25 && scroll < 600) {
          header.removeClass('navbar-basic').addClass("navbar-hidden");
          header.removeClass('navbar-opaque').addClass("navbar-hidden");
        }
        if (scroll >= 600) {
          header.removeClass('navbar-hidden').addClass("navbar-opaque");
          header.removeClass('navbar-basic').addClass("navbar-opaque");
        }
      });
    });
  }

  ngOnInit() {
  }

}
