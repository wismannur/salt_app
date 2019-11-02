import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'navbar', loadChildren: './navbar/navbar.module#NavbarPageModule' },
  { path: 'sub-navbar', loadChildren: './sub-navbar/sub-navbar.module#SubNavbarPageModule' },
  { path: 'section-videos', loadChildren: './section-videos/section-videos.module#SectionVideosPageModule' },
  { path: 'section-activity', loadChildren: './section-activity/section-activity.module#SectionActivityPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
