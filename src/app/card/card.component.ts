import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  modal: any;
  wait: any;


  constructor() {
  }

  ngOnInit() {
    this.modal = $('#myModal')[0];
    this.wait = $('.wait')[0];
  }

  openModal(url) {
    let dialog = $('#dialog');
    if (!dialog[0].children[1]) {
      dialog.append(`<IFRAME style="border: 0px;" src=${url} width="100%" height="100%"></IFRAME>`);
    }
    let interval = setInterval(function () {
      console.log(dialog[0].children[1])
      if (dialog[0].children[1]) {
        this.wait.style.display = "none";
        clearTimeout(interval);
      };
    }.bind(this), 1000);

    this.modal.style.display = "block";
    window.onclick = function (event) {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    }.bind(this)
  }

  closeModal() {
    this.modal.style.display = "none";
    this.wait.style.display = "block";
  }

  changed() {
    console.log('changed')
  }
}
