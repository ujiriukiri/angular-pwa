import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponents } from './module/app-routing.module';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule,
          MatProgressSpinnerModule, MatChipsModule, MatBadgeModule, MatListModule,
          MatExpansionModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
          MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatSidenavModule, MatGridListModule, MatMenuModule } from '@angular/material';

import 'hammerjs';
import { LayoutModule } from '@angular/cdk/layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    // RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatBadgeModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSidenavModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
