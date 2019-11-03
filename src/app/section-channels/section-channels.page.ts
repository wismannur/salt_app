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
      name: 'Google',
    },
    {
      id: 1,
      class: 'active',
      name:  'Dribble',
    },
    {
      id: 2,
      class: 'not-active',
      name:  'Dribble',
    },
    {
      id: 3,
      class: 'not-active',
      name:  'Dribble',
    },
    {
      id: 4,
      class: 'not-active',
      name:  'Dribble',
    },
    {
      id: 5,
      class: 'not-active',
      name:  'Dribble',
    },
    {
      id: 6,
      class: 'not-active',
      name:  'Dribble',
    },
    {
      id: 7,
      class: 'not-active',
      name:  'Dribble',
    },
    {
      id: 8,
      class: 'not-active',
      name:  'Dribble',
    },
    {
      id: 9,
      class: 'not-active',
      name:  'Dribble',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
