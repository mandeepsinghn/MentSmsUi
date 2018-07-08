import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpanelRoutingModule } from './cpanel-routing.module';
import { CpanelLayoutComponent } from './components/cpanel-layout/cpanel-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { CpanelHeaderComponent } from './components/common/cpanel-header/cpanel-header.component';
import { CpanelSidebarComponent } from './components/common/cpanel-sidebar/cpanel-sidebar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    CpanelRoutingModule,    
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [CpanelLayoutComponent, DashboardComponent, CpanelHeaderComponent,
     CpanelSidebarComponent, FooterComponent, SpinnerComponent]
})
export class CpanelModule { }
