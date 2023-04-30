import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SongpageComponent } from './songpage/songpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'songpage', component: SongpageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
