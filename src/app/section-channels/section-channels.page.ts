import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-channels',
  templateUrl: './section-channels.page.html',
  styleUrls: ['./section-channels.page.scss'],
})
export class SectionChannelsPage implements OnInit {

  datalist: any = [
    {
      id: 0,
      class: 'not-active',
    },
    {
      id: 1,
      class: 'not-active',
    },
    {
      id: 2,
      class: 'active',
    },
    {
      id: 3,
      class: 'not-active',
    },
    {
      id: 4,
      class: 'not-active',
    },
    {
      id: 5,
      class: 'not-active',
    },
    {
      id: 6,
      class: 'not-active',
    },
    {
      id: 7,
      class: 'not-active',
    },
    {
      id: 8,
      class: 'not-active',
    },
    {
      id: 9,
      class: 'not-active',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
