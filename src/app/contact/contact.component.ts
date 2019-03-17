import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = 31.967821;
  lng: number = 35.834415;
  zoom: number = 14;

  constructor() { }

  ngOnInit() {
  }

}
