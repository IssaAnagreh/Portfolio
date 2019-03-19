import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // not used
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
    HttpClientModule, // not used
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAh4tCruaPkM286t368L1IVjHR6vjn0x3s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {}

  ngOnInit(): void {}
}
