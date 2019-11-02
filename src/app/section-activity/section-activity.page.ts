import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-activity',
  templateUrl: './section-activity.page.html',
  styleUrls: ['./section-activity.page.scss'],
})
export class SectionActivityPage implements OnInit {

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
  ]

  constructor() { }

  ngOnInit() {
  }

}
