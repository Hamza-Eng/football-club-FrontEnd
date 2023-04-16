import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotefoundConponentComponent } from './page-notefound-conponent/page-notefound-conponent.component';

const routes: Routes = [
{path : "/" , component : AppComponent},
{path : "/**" , component : PageNotefoundConponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
