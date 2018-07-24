import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from '../app.component';
import { MainNavComponent } from '../component/main-nav/main-nav.component';
import { TopnavComponent } from '../component/topnav/topnav.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { MapComponent } from '../component/map/map.component';
import { ListComponent } from '../component/list/list.component';
import { VerificationComponent } from '../component/verification/verification.component';
import { SignupComponent } from '../component/signup/signup.component';
import { OrderDetailComponent } from '../component/order-detail/order-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'map/:id', component: MapComponent },
  { path: 'list', component: ListComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'order/:id', component: OrderDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [// AppComponent,
        MainNavComponent, TopnavComponent, SidebarComponent, DashboardComponent, MapComponent,
        ListComponent, VerificationComponent, SignupComponent,
        OrderDetailComponent
];
