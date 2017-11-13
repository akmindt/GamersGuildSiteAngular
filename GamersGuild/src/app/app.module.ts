import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'eventcalendar', component: EventCalendarComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: '',
  redirectTo: '/home/',
  pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    EventCalendarComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging
    ),
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
