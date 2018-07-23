import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from '../app.component';
import { MainNavComponent } from '../component/main-nav/main-nav.component';
import { TopnavComponent } from '../component/topnav/topnav.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { TestDashboardComponent } from '../component/test-dashboard/test-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: TestDashboardComponent }
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
  MainNavComponent, TopnavComponent, SidebarComponent, TestDashboardComponent];
