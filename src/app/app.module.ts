import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopnavComponent } from './component/topnav/topnav.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule,
          MatProgressSpinnerModule, MatChipsModule, MatBadgeModule, MatListModule,
          MatExpansionModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
          MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

import 'hammerjs';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [
  {path: '', component: AppComponent}
];

@NgModule({
  declarations: [AppComponent, TopnavComponent, SidebarComponent, MainNavComponent],
  imports: [
    RouterModule.forRoot(routes),
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
    MatCheckboxModule, MatSidenavModule, LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
