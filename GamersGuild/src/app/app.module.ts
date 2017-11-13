import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'eventcalendar', component: EventCalendarComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: '',
  redirectTo: '/home/',
  pathMatch: 'full'}
];

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
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
