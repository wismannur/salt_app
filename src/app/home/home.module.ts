import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NavbarPage } from '../navbar/navbar.page';
import { SubNavbarPage } from '../sub-navbar/sub-navbar.page';
import { SectionVideosPage } from '../section-videos/section-videos.page';
import { SectionActivityPage } from '../section-activity/section-activity.page';
import { SectionPeoplePage } from '../section-people/section-people.page';
import { SectionDocumentsPage } from '../section-documents/section-documents.page';
import { SectionChannelsPage } from '../section-channels/section-channels.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    NavbarPage,
    SubNavbarPage,
    SectionVideosPage,
    SectionActivityPage,
    SectionPeoplePage,
    SectionDocumentsPage,
    SectionChannelsPage,
    FooterPage,
  ]
})
export class HomePageModule {}
