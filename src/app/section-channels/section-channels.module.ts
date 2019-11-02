import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SectionChannelsPage } from './section-channels.page';

const routes: Routes = [
  {
    path: '',
    component: SectionChannelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SectionChannelsPage]
})
export class SectionChannelsPageModule {}
