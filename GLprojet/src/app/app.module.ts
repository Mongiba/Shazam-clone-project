import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SongpageComponent } from './songpage/songpage.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    HomepageComponent,
    SongpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
