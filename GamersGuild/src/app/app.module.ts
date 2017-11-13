import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatSelectModule,
         MatOptionModule } from '@angular/material';

import { FooterComponent } from './components/footer/footer.component';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventorySearchComponent } from './components/inventory/search/inventory-search.component';
import { CardComponent } from './components/card/card.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'event-calendar', component: EventCalendarComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'online-store', component: InventoryComponent},
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
    ContactUsComponent,
    InventoryComponent,
    InventorySearchComponent,
    CardComponent
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
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
