import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from '../app.component';
import { MainNavComponent } from '../component/main-nav/main-nav.component';
import { TopnavComponent } from '../component/topnav/topnav.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { MapComponent } from '../component/map/map.component';
import { ListComponent } from '../component/list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'map', component: MapComponent },
  { path: 'list', component: ListComponent }
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
  MainNavComponent, TopnavComponent, SidebarComponent, DashboardComponent, MapComponent,
  ListComponent];
