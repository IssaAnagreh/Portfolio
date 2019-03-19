import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {SearchYoutubeService} from '../search-youtube.service' // Not used

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  modal: any;
  wait: any;
  video: any;


  constructor(private SearchYoutubeService: SearchYoutubeService) {
  }

  ngOnInit() {
    this.modal = $('#myModal')[0];
    this.wait = $('.wait')[0];
    this.video = "xsHjoiNxPB0"
    // Youtube search (not used)
    // this.SearchYoutubeService.searchYouTube().subscribe(
    //   (data: any) => {
    //     this.video = data.items[3].id.videoId
    //   }
    // );
  }

  openModal(url) {
    let dialog = $('#dialog');
    if (!dialog[0].children[1]) {
      dialog.append(`<IFRAME class="iframe" style="border: 0px;" src=${url} width="100%" height="100%"></IFRAME>`);
    }
    let interval = setInterval(function () {
      if (dialog[0].children[1]) {
        this.wait.style.display = "none";
        clearTimeout(interval);
      };
    }.bind(this), 1000);

    this.modal.style.display = "block";
    window.onclick = function (event) {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
        $('.iframe').remove();
      }
    }.bind(this)
  }

  closeModal() {
    this.modal.style.display = "none";
    this.wait.style.display = "block";
    $('.iframe').remove();
  }

  changed() {
    console.log('changed')
  }
}
