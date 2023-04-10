import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SongPageComponent } from './songpage/songpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'song/:id', component: SongPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
