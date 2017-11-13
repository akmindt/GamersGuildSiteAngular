import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

<<<<<<< HEAD
import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
>>>>>>> ec3488794837b912383f7f4f055b4a172c33d3ab

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '',
  redirectTo: '/home/',
  pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging
    ),
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
