//@angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material imports
import { MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatSelectModule,
         MatOptionModule, MatSidenavModule, MatIconModule,  MatIconRegistry, MatGridListModule } from '@angular/material';

//Custom component imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventorySearchComponent } from './components/inventory/search/inventory-search.component';
import { GridInventoryComponent } from './components/grid-inventory/grid-inventory.component';

//Custom service imports
import { CardService } from './services/card.service';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'event-calendar', component: EventCalendarComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'online-inventory', component: InventoryComponent},
  {path: '',
  redirectTo: 'home',
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
    GridInventoryComponent,
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
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpModule,
    MatGridListModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
