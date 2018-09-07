import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// HTTP Module
import { HttpClientModule } from '@angular/common/http';
// Forms Modules
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
// Core Components
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HeaderComponent } from './core/header/header.component';
import { BookingFormComponent } from './core/booking-form/booking-form.component';
import { ParkingSpaceComponent } from './core/parking-space/parking-space.component';
import { SigninComponent } from './core/signin/signin.component';
import { SignupComponent } from './core/signup/signup.component';
// In Memory Web-API
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BookingFormComponent,
    ParkingSpaceComponent,
    MessageComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
