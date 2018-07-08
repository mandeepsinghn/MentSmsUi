import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatInputModule,
  MatFormFieldModule, MatCardModule, MatToolbarModule, MatIconModule} from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [    
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [LoginComponent, AuthLayoutComponent]
})
export class AuthModule { }
