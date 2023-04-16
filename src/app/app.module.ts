import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../commone/navbar/navbar.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { MenubarModule } from 'primeng/menubar';
import { PageNotefoundConponentComponent } from './page-notefound-conponent/page-notefound-conponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeHeaderComponent,
    PageNotefoundConponentComponent,
  ],
  imports: [
    MenubarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
