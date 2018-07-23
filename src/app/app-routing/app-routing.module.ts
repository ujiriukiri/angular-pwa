import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from '../app.component';
import { MainNavComponent } from '../component/main-nav/main-nav.component';
import { TopnavComponent } from '../component/topnav/topnav.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [
  // AppComponent,
  MainNavComponent, TopnavComponent, SidebarComponent, DashboardComponent];
