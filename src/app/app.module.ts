import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

import { AgmCoreModule } from '@agm/core';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent,
    AdminComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAh4tCruaPkM286t368L1IVjHR6vjn0x3s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    // $(function () {
    //   var header = $(".firstnavbar");
    //   $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 550) {
    //       header.removeClass('secondnavbar').addClass("thirdnavbar");
    //     } else if (scroll >= 250 && scroll < 550) {
    //       header.removeClass('firstnavbar').addClass("secondnavbar");
    //     } else {
    //       header.removeClass('thirdnavbar').addClass("firstnavbar");
    //     }
    //   });
    // });
  }


  ngOnInit(): void {

  }
}
