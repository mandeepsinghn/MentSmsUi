import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpanelLayoutComponent } from './components/cpanel-layout/cpanel-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CpanelLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent        
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpanelRoutingModule { }
