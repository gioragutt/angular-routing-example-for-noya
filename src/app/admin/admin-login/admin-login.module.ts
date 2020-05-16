import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLoginComponent,
      }
    ])
  ]
})
export class AdminLoginModule { }
